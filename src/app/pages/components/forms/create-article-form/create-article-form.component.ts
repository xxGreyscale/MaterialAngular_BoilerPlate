import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';



export interface Tag {
  name: string;
  slug: string;
  type: string;
}

export interface Category {
  name: string;
  value: string;
}



@Component({
  selector: 'app-create-article-form',
  templateUrl: './create-article-form.component.html',
  styleUrls: ['./create-article-form.component.scss']
})
export class CreateArticleFormComponent implements OnInit {

  // Tag chips variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [];

  // category select
  categories: Category[] = [
    { name: 'hamso', value: 'option3' },
    { name: 'loko', value: 'option2' },
    { name: 'morapa', value: 'option1' }
  ];

  // image source for file preview before upload
  imageSrc: string;

  articleForm: any;


  // ********** Style for the richtext editor
  editorStyle = {
    height: '300px'
  };

  config = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'link'],
      ['code', { 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
    ]
  };



    // ********** section for the richtext editor ends here *********** //



  // ********* this section is for textarea configuration ************ //

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  submitted: boolean;
  errors: any[];
  articleId: any;
  article: any;

  onContentChange(e) {
    // restrict length first
    if (e.editor.getLength() > 250) {
      e.editor.deleteText(250, e.editor.getLength());
    }
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  // ********** textarea configs ends here ****************** //

  // ********** the tags input chips start here ************* //
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({name: value.trim(), slug: 'true', type: 'News'});
      console.log(this.tags);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

    // ********** the tags input chips ends here ************* //

// ********* onSubmit *************** //
onSubmit() {
  let payload: object;
  if (this.articleId) {
    payload = {
      id: this.articleId,
      title: this.articleForm.get('title').value,
      subtitle: this.articleForm.get('subtitle').value,
      category: this.articleForm.get('category').value,
      link: this.articleForm.get('link').value,
      content: this.articleForm.get('content').value,
    // coverphoto: this.articleForm.get('coverphoto').value,
      published: this.articleForm.get('published').value,
      tags: JSON.stringify(this.tags),
      // this will be resolved soon
    };
    console.log(payload)
    debugger
    this.updateArticle(payload);

  } else {
    payload = {
      title: this.articleForm.get('title').value,
      subtitle: this.articleForm.get('subtitle').value,
      category: this.articleForm.get('category').value,
      link: this.articleForm.get('link').value,
      content: this.articleForm.get('content').value,
    // coverphoto: this.articleForm.get('coverphoto').value,
      published: this.articleForm.get('published').value,
      tags: JSON.stringify(this.tags),
    };
    this.createArticle(payload);
  }
}

onFileChange(fileInput: any) {
  this.imageSrc = this.articleForm.get('coverphoto').value.files[0];

  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.imageSrc = e.target.result;
  };
  reader.readAsDataURL(fileInput.target.files[0]);
}


constructor(private _ngZone: NgZone, private fb: FormBuilder,
            private requestService: RequestsService,
            private snackBar: MatSnackBar,
            private route: ActivatedRoute) {
              this.articleForm = this.fb.group({
                title: ['', Validators.required],
                subtitle: ['', ],
                category: ['', ],
                link: [''],
                content: [''],
                coverphoto: [''],
                published: [''],
              });
}

// ******** Oninit ************* //
ngOnInit() {

  this.route.params.pipe().subscribe(param => {
    this.articleId = param.id;
    if (this.articleId) {
      this.getArticle(this.articleId);
    }
  });
}


onAddAnother() {

}

createArticle(payload: any) {
  this.requestService.endPoint = 'posts';
  this.requestService.create(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  });
}

updateArticle(payload: any) {
  this.requestService.endPoint = 'posts';
  this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  }, error => {
    console.log(error);
    this.openSnackBar(error.message, 'success');
  });
}

getArticle(resourceId) {
  this.requestService.endPoint = 'posts';
  this.requestService.getWithId(resourceId).subscribe(response => {
    const responseCatcher: any = response;
    this.article = responseCatcher.data;
    console.log(this.article)
    this.fillInput(this.article);
  });
}

fillInput(resource: any) {
  this.articleForm.get('title').setValue(resource.title);
  this.articleForm.get('subtitle').setValue(resource.subtitle);
  this.articleForm.get('category').setValue(resource.category);
  this.articleForm.get('link').setValue(resource.link);
  this.articleForm.get('content').setValue(resource.content);
  this.articleForm.get('published').setValue(resource.published);
  this.tags = resource.tags;
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
