import { Component, OnInit, NgZone, ViewChild, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface Tag {
  name: string;
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
export class CreateArticleFormComponent {
  @Input() formData;

  // Tag chips variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

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

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

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

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
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
  const article = {
    title: this.articleForm.get('title').value,
    subtitle: this.articleForm.get('subtitle').value,
    category: this.articleForm.get('category').value,
    link: this.articleForm.get('link').value,
    content: this.articleForm.get('content').value,
    coverphoto: this.articleForm.get('coverphoto').value,
    published: this.articleForm.get('published').value,
    tags: this.tags,
  };

  console.log(article);
}

onFileChange(fileInput: any) {
  this.imageSrc = this.articleForm.get('coverphoto').value.files[0];

  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.imageSrc = e.target.result;
  };
  reader.readAsDataURL(fileInput.target.files[0]);
}


constructor(private _ngZone: NgZone, private fb: FormBuilder) {

  this.articleForm = this.fb.group({
    title: ['', Validators.required],
    subtitle: ['', Validators.required],
    category: ['', Validators.required],
    link: [''],
    content: [''],
    coverphoto: [''],
    published: [''],
  });
}

}
