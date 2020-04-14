import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';


@Component({
  selector: "app-radiobutton",
  template: `
  <div class="row py-4">
  <div class="col-3 pl-5">
  <label> {{ field.label }} </label>
  </div>
  <div class="col-9">
      <div class="demo-full-width margin-top" [formGroup]="group">
        <mat-radio-group [formControlName]="field.name">
        <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  </div>
  <mat-divider></mat-divider>
`,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
