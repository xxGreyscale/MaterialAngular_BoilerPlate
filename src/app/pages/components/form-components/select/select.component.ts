import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';


@Component({
  selector: "app-select",
  template: `
  <div class="row pt-4">
    <div class="col-3 pl-5">
      <label> {{ field.label }} </label>
    </div>
    <div class="col-9">
      <mat-form-field class="demo-full-width margin-top" [formGroup]="group" appearance="outline">
          <mat-select [placeholder]="field.label" [formControlName]="field.name">
          <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
          </mat-select>
      </mat-form-field>
    </div>
  </div>
  <mat-divider></mat-divider>
    
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
