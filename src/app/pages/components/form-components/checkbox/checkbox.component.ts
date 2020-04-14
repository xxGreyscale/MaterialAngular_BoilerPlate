import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';

@Component({
  selector: "app-checkbox",
  template: `
  <div class="row py-4">
    <div class="col-3 pl-5">    
      <label> {{ field.label }} </label>
    </div>
    <div class="col-9">
      <div class="demo-full-width margin-top" [formGroup]="group" >
      <mat-checkbox [formControlName]="field.name" color="primary"></mat-checkbox>
      </div>
    </div>
  </div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
