import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataTableService } from 'src/app/services/data-table.service';

export interface PostsApi {
  items: any[];
  total_count: number;
}

@Component({
  selector: 'app-news-and-articles-list',
  templateUrl: './news-and-articles-list.component.html',
  styleUrls: ['./news-and-articles-list.component.scss']
})
export class NewsAndArticlesListComponent implements OnInit {
  
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'posts'
    this.dtService.currentPageTitle = 'News & Articles'
    this.dtService.createButton = "Post Article"
    this.dtService.createButtonUrl = '/dashboard/news-and-articles/create'
    this.dtService.getResourcesEndpoint = 'posts';
    this.dtService.viewResourceUrl = '/dashboard/news-and-articles/article/'
    this.dtService.searchEndpoint = 'posts/search';
    this.dtService.searchParam = 'title';    
    
  }
 

 columnHeader1 = {'select_box':'select','cover_photo': 'Cover Photo', 'title': 'Title', 'category': 'Category', 'subtitle': 'Subtitle', 'link': 'Link', 'tags': 'Tags','published': 'Published', 'more_option': 'more'};

 startups: any;

 ngOnInit(): void {
   window.setTimeout(() => {
    this.dataIsLoaded = true;
   }, 500)
   this.getCategories();
 }

 getCategories() {
  //  this.requestService.endPoint = 'article-categories'
  //  this.requestService.get().subscribe(response=> {
  //    let responseCatcher = response;
  //    console.log(response);
     
  //  })
 }

}
