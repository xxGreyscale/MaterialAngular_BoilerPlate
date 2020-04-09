import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';;
import { RequestsService } from 'src/app/services/request-provider.service';
import { Observable, merge, of as observableOf } from 'rxjs';
import { DataTableService } from 'src/app/services/data-table.service';


@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit {
 
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'topics';
    this.dtService.currentPageTitle = 'Topics';
    this.dtService.createButtonUrl = '/dashboard/forums/topics/create';
    this.dtService.createButton = 'Add Topic';
    this.dtService.getResourcesEndpoint = 'forums/topics';
    this.dtService.searchEndpoint = 'forums/topics/search';
    this.dtService.viewResourceUrl = '/dashboard/forums/channels/';
    this.dtService.searchParam = 'name';    
    
  } 
 

 columnHeader = {'select_box':'select','cover': 'Cover Photo', 'name': 'Name', 'description': 'Description', 'color': 'Color', 'more_option': 'more'};

 startups: any;

 ngOnInit(): void {
   this.startups = this.getStartUps();
   window.setTimeout(() => {
    this.dataIsLoaded = true;
   }, 100)
 }

 getStartUps() {
   this.requestService.endPoint = 'startupusers';
   const observable: Observable<any> = this.requestService.get();
   return observable;
 }
}
