import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forum-post-form',
  templateUrl: './forum-post-form.component.html',
  styleUrls: ['./forum-post-form.component.scss']
})
export class ForumPostFormComponent implements OnInit {

  forumPostForm: any;
  submitted: boolean;
  errors: any[];
  forumPostId: any;
  forumPost: any;
  channels: any;
  topics: any;

  constructor(private fb: FormBuilder,
              private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) {
    this.forumPostForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      topic: [],
      channel: [''],
      content: [''],
      featured:[''],
    });
   }

  ngOnInit() {
    this.route.params.pipe().subscribe(param => {
      this.forumPostId = param.id;
      if (this.forumPostId) {
        this.getforumPost(this.forumPostId);
      }
    });
  }


  onSubmit() {
    // we pass Ids for channel and topic
    if (this.forumPostId) {
      const payload = {
        id: this.forumPostId,
        title: this.forumPostForm.get('title').value,
        subtitle: this.forumPostForm.get('subtitle').value,
        topic: this.forumPostForm.get('topic').value,
        channel: this.forumPostForm.get('channel').value,
        content: this.forumPostForm.get('content').value,
        featured: this.forumPostForm.get('featured').value,
      };
      this.updateforumPost(payload);
    } else {
      const payload = {
        title: this.forumPostForm.get('title').value,
        subtitle: this.forumPostForm.get('subtitle').value,
        topic: this.forumPostForm.get('topic').value,
        channel: this.forumPostForm.get('channel').value,
        content: this.forumPostForm.get('content').value,
        featured: this.forumPostForm.get('featured').value,
      };
      this.createforumPost(payload);
    }
  }

  createforumPost(payload: any) {
    this.requestService.endPoint = 'forums/posts';
    this.requestService.create(payload).subscribe(response => {
      const responseCatcher: any = response;
      this.openSnackBar(responseCatcher.message, 'success');
    });
  }

  updateforumPost(payload) {
    this.requestService.endPoint = 'forums/posts';
    this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  });
  }

  getforumPost(resourceId) {
    this.requestService.endPoint = 'forums/posts';
    this.requestService.getWithId(resourceId).subscribe(response => {
      const responseCatcher: any = response;
      this.forumPost = responseCatcher.data;
      this.fillInput(this.forumPost);
    });
  }

  fillInput(resource: any) {
    this.forumPostForm.get('title').setValue(resource.title);
    this.forumPostForm.get('subtitle').setValue(resource.subtitle);
    this.forumPostForm.get('topic').setValue(resource.topic);
    this.forumPostForm.get('channel').setValue(resource.channel);
    this.forumPostForm.get('content').setValue(resource.content);
    this.forumPostForm.get('featured').setValue(resource.featured);
}


  addAnother() {

  }

  goBack() {

  }

  showErrors(error) {
    this.submitted = false;
    this.errors = [];
    if (error['errors'] !== undefined) {
      for (let key in error['errors']) {
        if (error['errors'].hasOwnProperty(key)) {
          this.errors.push(error['errors'][key][0]);
        }
      }
    } else {
      this.errors.push(error['error']['message']);
    }
  }

  openSnackBar(response, classStatus) {
    this.snackBar.open(response, 'dismiss' , {
      duration: 2000,
      horizontalPosition: 'right',
      panelClass: [classStatus]
    });
  }

}
