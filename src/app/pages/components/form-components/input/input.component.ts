import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';

@Component({
  selector: "app-input",
  template: `
  <div class="row mt-4">
    <div class="col-3 pl-5">
    <label> {{ field.label }} </label>
    </div>
    <div class="col-9">
      <mat-form-field class="demo-full-width" [formGroup]="group" appearance="outline">
        <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
        <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
        </ng-container>
      </mat-form-field>
    </div>
  </div>
  <mat-divider></mat-divider>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
