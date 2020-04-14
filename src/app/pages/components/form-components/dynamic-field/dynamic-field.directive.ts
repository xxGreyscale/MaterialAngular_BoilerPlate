import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnInit,
    ViewContainerRef
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
  import { InputComponent } from "../input/input.component";
  import { ButtonComponent } from "../button/button.component";
  import { SelectComponent } from "../select/select.component";
  import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
  import { CheckboxComponent } from "../checkbox/checkbox.component";
import { DateComponent } from '../date/date.component';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { TextAreaComponent } from '../text-area/text-area.component';
import { FileInputComponent } from '../file-input/file-input.component';
import { RichContentComponent } from '../rich-content/rich-content.component';
  
  const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent,
    textarea: TextAreaComponent,
    fileinput: FileInputComponent,
    richContent: RichContentComponent
  };
  @Directive({
    selector: "[dynamicField]"
  })
  export class DynamicFieldDirective implements OnInit {
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
    componentRef: any;
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}
    ngOnInit() {
      const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
  