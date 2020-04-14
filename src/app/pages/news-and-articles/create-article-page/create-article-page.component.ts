import { Category } from './../../components/forms/create-article-form/create-article-form.component';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DynamicFormComponent } from '../../components/form-components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { Validators } from '@angular/forms';
import { MatSnackBar, throwToolbarMixedModesError } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  article: any;
  articleId: any;
  onCreating: FieldConfig[]= [
      {
        type: "input",
        label: "Title",
        inputType: "text",
        name: "title",
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
        validations: [
        ]
      },
      {
        type: "select",
        label: "Category",
        name: "category",
        options: ["Male", "Female"],
        value: "Male"
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
        type: "richContent",
        label: "Content",
        name: "content",
      },
      {
        type: "checkbox",
        label: "Published",
        name: "published",
        value: true
      },
      {
        type: "button",
        buttonType: "submit",
        label: "Add Article"
      },
     
    ];

  onEditting: FieldConfig[];
     
 
  pageLoaded = new BehaviorSubject<boolean>(false);
  regConfig: FieldConfig[]
 

  submit(value: any) {
    this.createArticle(value)
  }
  constructor(private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private cdRef:ChangeDetectorRef) {
                this.route.params.pipe().subscribe(param => {
                  this.articleId = param.id;
                  this.articleId ? 
                  setTimeout(() => {
                    this.getArticle(this.articleId)
                  }): this.regConfig = this.onCreating;         
                  
                });
   }

   ngOnInit() {
    
}

ngAfterViewInit() {
    console.log('on after view init', this.form);    
        
    // this.cdRef.detectChanges();
}


createArticle(payload: any) {
  this.requestService.endPoint = 'posts';
  this.requestService.create(payload).subscribe(response => {
    const responseCatcher: any = response;
    console.log(responseCatcher.message);
    
    // this.openSnackBar(responseCatcher.message, 'success');
  });
}


updateArticle(payload: any) {
  this.requestService.endPoint = 'posts';
  this.requestService.update(payload).subscribe(response => {
    const responseCatcher: any = response;
    this.openSnackBar(responseCatcher.message, 'success');
  }, error => {
    console.log(error);
    this.openSnackBar(error.message, 'success');
  });
}

getArticle(resourceId) {
  this.requestService.endPoint = 'posts';
  this.requestService.getWithId(resourceId).subscribe(response => {
    const responseCatcher: any = response;    
    this.article = responseCatcher.data;
    console.log(this.article);
    this.fillInput(this.article);
    this.pageLoaded.next(true)    
    this.regConfig = this.onEditting;    
  });
}

  fillInput(article: any) {
    this.onEditting =  [
      {
        type: "input",
        label: "Title",
        inputType: "text",
        name: "title",
        value: article.title,
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
        value: article.link,
        validations: [
        ]
      },
      {
        type: "select",
        label: "Category",
        name: "category",
        options: ["Male", "Female"],
        value: article.category.name,
      },
      {
        type: "fileinput",
        label: "Cover Photo",
        inputType: "file",
        name: "cover_photo",
        // value: article.title,
        validations: [
        ]
      },
      {
        type: "richContent",
        label: "Content",
        name: "content",
        value: article.content,
      },
      {
        type: "checkbox",
        label: "Published",
        name: "published",
        value: article.published
      },
      {
        type: "button",
        buttonType: "submit",
        label: "Update Article"
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
