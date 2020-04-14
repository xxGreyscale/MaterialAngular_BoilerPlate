import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';

@Component({
  selector: "app-rich-content",
  template: `
  <div class="row py-4">
    <div class="col-3 pl-5">    
      <label> {{ field.label }}  </label>
    </div>
    <div class="col-9">
        <quill-editor [modules]="config" (onContentChanged)="onContentChange($event)" [sanitize]="true" id="ql_editor" [style]="editorStyle" formControlName='{{field.name}}'></quill-editor>
    </div>
  </div>
  <mat-divider></mat-divider>

`,
  styles: []
})
export class RichContentComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

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

  onContentChange(e) {
    // restrict length first
    if (e.editor.getLength() > 250) {
      e.editor.deleteText(250, e.editor.getLength());
    }
  }

  constructor() {}
  ngOnInit() {}
}
