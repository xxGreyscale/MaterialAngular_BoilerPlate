import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DynamicFormComponent } from 'src/app/pages/components/form-components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creat-program-page',
  templateUrl: './creat-program-page.component.html',
  styleUrls: ['./creat-program-page.component.scss']
})
export class CreatProgramPageComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  
  onCreating: FieldConfig[]= [
    {
      type: "input",
      label: "Name",
      inputType: "text",
      name: "name",
      validations: [
      ]
    },
    {
      type: "input",
      label: "Description",
      inputType: "text",
      name: "description",
      validations: [
      ]
    },
    {
      type: "date",
      label: "Application Open At",
      inputType: "date",
      name: "application_opens_at",
      validations: [
      ]
    },
    {
      type: "date",
      label: "Application Closes At",
      inputType: "date",
      name: "application_closes_at",
      validations: [
      ]
    },
    {
      type: "fileinput",
      label: "Cover Photo",
      inputType: "file",
      name: "cover_photo",
      validations: [
      ]
    },
    {
      type: "checkbox",
      label: "Active",
      name: "has_opened",
      value: true
    },
    {
      type: "button",
      buttonType: "submit",
      label: "Add Program"
    },
   
  ];

onEditting: FieldConfig[];
   
pageLoaded = new BehaviorSubject<boolean>(false);
  regConfig: FieldConfig[]
  programId: any;
  program: any;

  submit(value: any) {
    console.log("here is our",value);
    this.programId ? this.updateProgram(value):this.createProgram(value);
  }
 
  
  constructor(private requestService: RequestsService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private cdRef:ChangeDetectorRef) {
      this.route.params.pipe().subscribe(param => {
        this.programId = param.id;
        this.programId ? 
        setTimeout(() => {
          this.getProgram(this.programId)
        }): this.regConfig = this.onCreating;         
        
      });
}


   ngOnInit() {
  
}

ngAfterViewInit() {
    console.log('on after view init', this.form);
    
}



createProgram(payload: any) {
  this.requestService.endPoint = 'programs';
  this.requestService.create(payload).subscribe(response => {
    const responseCatcher: any = response;
    console.log(responseCatcher.message);
    
    // this.openSnackBar(responseCatcher.message, 'success');
  });
}

updateProgram(payload: any) {
  this.requestService.endPoint = 'programs';
  this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  }, error => {
    console.log(error);
    this.openSnackBar(error.message, 'success');
  });
}


getProgram(resourceId) {
  this.requestService.endPoint = 'programs';
  this.requestService.getWithId(resourceId).subscribe(response => {
    const responseCatcher: any = response;    
    this.program = responseCatcher.data;
    console.log(this.program);
    this.fillInput(this.program);
    this.pageLoaded.next(true)    
    this.regConfig = this.onEditting;    
  });
}

  fillInput(program: any) {
    this.onEditting =  [
      {
        type: "input",
        label: "Title",
        inputType: "text",
        name: "title",
        value: program.title,
        validations: [
        ]
      },
      {
        type: "input",
        label: "Subtitle",
        inputType: "text",
        name: "subtitle",
        validations: [
        ]
      },
      {
        type: "input",
        label: "Link",
        inputType: "text",
        name: "link",
        value: program.link,
        validations: [
        ]
      },
      {
        type: "select",
        label: "Category",
        name: "category",
        options: ["Male", "Female"],
        value: program.category.name,
      },
      {
        type: "fileinput",
        label: "Cover Photo",
        inputType: "file",
        name: "cover_photo",
        // value: program.title,
        validations: [
        ]
      },
      {
        type: "richContent",
        label: "Content",
        name: "content",
        value: program.content,
      },
      {
        type: "checkbox",
        label: "Published",
        name: "published",
        value: program.published
      },
      {
        type: "button",
        buttonType: "submit",
        label: "Update program"
      },
     
    ]

  }


  
openSnackBar(response, classStatus) {
  this.snackBar.open(response, 'dismiss' , {
    duration: 2000,
    horizontalPosition: 'right',
    panelClass: [classStatus]
  });
}
}
