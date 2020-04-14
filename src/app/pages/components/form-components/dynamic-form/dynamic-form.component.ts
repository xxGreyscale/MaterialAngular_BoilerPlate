import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output
  } from "@angular/core";
  import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
  } from "@angular/forms";
import { FieldConfig } from 'src/app/interfaces/field.interface';
  
 // <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    // </ng-container>
  @Component({
    exportAs: "dynamicForm",
    selector: "dynamic-form",
    template: `
    <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit()">
    <mat-card class="mat-elevation-z2">
    <div *ngFor="let field of fields;">
      <ng-container *ngIf="field.type != 'button'" dynamicField [field]="field" [group]="form">
      </ng-container>
    </div>
    </mat-card>

    <div *ngFor="let field of fields;">
      <div class="my-1 d-flex flex-row-reverse">
        <ng-container *ngIf="field.type === 'button'" dynamicField [field]="field" [group]="form">
        </ng-container>
      </div>
    </div>
    </form>
    `,
    styles: []
  })
  export class DynamicFormComponent implements OnInit {
    @Input() fields: FieldConfig[] = [];
  
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  
    form: FormGroup;
  
    get value() {
      return this.form.value;
    }
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.form = this.createControl();
      this.fields.forEach(field => {
        if (field.type != "button"){
          // set value on updating
          // this.form.get(field.name).setValue("hello")
        }
      })
    }
  
    onSubmit() {
      event.preventDefault();
      event.stopPropagation();
      if (this.form.valid) {     
        this.submit.emit(this.form.value);
      } else {
        this.validateAllFormFields(this.form);
      }
    }
  
    createControl() {
      const group = this.fb.group({});
      this.fields.forEach(field => {
        if (field.buttonType === "submit") return;
        const control = this.fb.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
      });
            
      return group;
    }
  
    bindValidations(validations: any) {
      if (validations.length > 0) {
        const validList = [];
        validations.forEach(valid => {
          validList.push(valid.validator);
        });
        return Validators.compose(validList);
      }
      return null;
    }
  
    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
  