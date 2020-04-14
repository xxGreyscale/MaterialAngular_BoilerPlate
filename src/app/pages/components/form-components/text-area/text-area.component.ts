import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';

@Component({
  selector: "app-text-area",
  template: `
  <div class="row mt-4">
    <div class="col-3 pl-5">
    <label> {{ field.label }} </label>
    </div>
    <div class="col-9">
        <mat-form-field appearance="outline" [formGroup]="group" color="primary">
            <textarea  matInput
            [formControlName]="field.name"
            [placeholder]="field.label"
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="3"
            cdkAutosizeMaxRows="6"
            placeholder="Ex. Innovation week 2020: Finteach and ecommerce scaling">
            </textarea>
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
export class TextAreaComponent implements OnInit {
@ViewChild('autosize') autosize: CdkTextareaAutosize;

  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
  
}
