import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ChannelFormComponentComponent } from './forms/channel-form-component/channel-form-component.component';
import { DataTablesComponentComponent } from './data-tables-component/data-tables-component.component';
import { ForumPostFormComponent } from './forms/forum-post-form/forum-post-form.component';
import { MentorFormComponent } from './forms/mentor-form/mentor-form.component';
import { InputComponent } from './form-components/input/input.component';
import { ButtonComponent } from './form-components/button/button.component';
import { SelectComponent } from './form-components/select/select.component';
import { DateComponent } from './form-components/date/date.component';
import { RadiobuttonComponent } from './form-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './form-components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './form-components/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [HeaderComponent, 
    DataTablesComponentComponent, 
    ForumPostFormComponent, 
    MentorFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MaterialModule,
  ], 
  exports: [
    DataTablesComponentComponent, 
    HeaderComponent, 
    ForumPostFormComponent, 
    MentorFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class ComponentsModule { }
