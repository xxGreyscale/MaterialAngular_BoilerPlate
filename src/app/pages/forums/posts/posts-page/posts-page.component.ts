import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request-provider.service';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
    
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'posts';
    this.dtService.currentPageTitle = 'Posts';
    this.dtService.createButtonUrl = '/dashboard/forums/posts/create';
    this.dtService.createButton = 'Add Post';
    this.dtService.getResourcesEndpoint = 'forums/posts';
    this.dtService.searchEndpoint = 'forums/posts/search';
    this.dtService.viewResourceUrl = '/dashboard/forums/posts/';
    this.dtService.searchParam = 'content';    
    
  } 
 

  columnHeader = {'select_box':'select','content': 'Content', 'is_featured': 'Featured?', 'channel': 'Channel', 'topic': 'Topic', 'like_count': 'Likes', 'reply_count': 'Comments', 'more_option': 'more'};

 startups: any;

 ngOnInit(): void {
   window.setTimeout(() => {
    this.dataIsLoaded = true;
   }, 100)
 }
}
