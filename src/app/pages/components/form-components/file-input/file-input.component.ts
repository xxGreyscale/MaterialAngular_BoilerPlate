import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';

@Component({
  selector: "app-input",
  template: `
  <div class="row py-4">
    <div class="col-3 pl-5">
      <label> {{ field.label }} </label>
    </div>
    <div class="col-9">
      <div [formGroup]="group" appearance="outline">
      <input [formControlName]="field.name" [value]="field.value" [placeholder]="field.label" [type]="field.inputType">
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="-error">
      </ng-container>
      </div>
    </div>
  </div>
  <mat-divider></mat-divider>
`,
  styles: []
})

export class FileInputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
    imageSrc: any;
  constructor() {}
  ngOnInit() {}

  onFileChange(fileInput: any) {
    this.imageSrc = this.group.get(`${this.field.name}`).value.files[0];
  
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  }
  
}
