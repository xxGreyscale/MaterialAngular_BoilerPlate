import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestsService } from 'src/app/services/request-provider.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-topics-form-component',
  templateUrl: './topics-form-component.component.html',
  styleUrls: ['./topics-form-component.component.scss']
})
export class TopicsFormComponent implements OnInit {

  topicForm: any;
  imageSrc: any;
  submitted: boolean;
  errors: any[];
  topicId: any;
  topic: any;

  constructor(private fb: FormBuilder,
              private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) {
    this.topicForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      color: [''],
      coverphoto: [''],
    });
   }

  ngOnInit() {
    this.route.params.pipe().subscribe(param => {
      this.topicId = param.id;
      if (this.topicId) {
        this.getTopic(this.topicId);
      }
    });
  }


  onSubmit() {
    if (this.topicId) {
      const payload = {
        id: this.topicId,
        name: this.topicForm.get('name').value,
        description: this.topicForm.get('description').value,
        color: this.topicForm.get('color').value,
        coverphoto: this.topicForm.get('coverphoto').value
      };
      this.updateTopic(payload);
    } else {
      const payload = {
        name: this.topicForm.get('name').value,
        description: this.topicForm.get('description').value,
        color: this.topicForm.get('color').value,
        coverphoto: this.topicForm.get('coverphoto').value
      };
      this.createTopic(payload);
    }
  }

  createTopic(payload: any) {
    this.requestService.endPoint = 'forums/topics';
    this.requestService.create(payload).subscribe(response => {
      const responseCatcher: any = response;
      this.openSnackBar(responseCatcher.message, 'success');
    });
  }

  updateTopic(payload) {
    this.requestService.endPoint = 'forums/topics';
    this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  });
  }

  getTopic(resourceId) {
    this.requestService.endPoint = 'forums/topics';
    this.requestService.getWithId(resourceId).subscribe(response => {
      const responseCatcher: any = response;
      this.topic = responseCatcher.data;
      this.fillInput(this.topic);
    });
  }

  fillInput(resource: any) {
    console.log(resource);
    this.topicForm.get('name').setValue(resource.name);
    this.topicForm.get('description').setValue(resource.description);
    this.topicForm.get('color').setValue(resource.color);
}


  addAnother() {

  }

  goBack() {

  }

  onFileChange(fileInput: any) {
    this.imageSrc = this.topicForm.get('coverphoto').value.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(fileInput.target.files[0]);
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
