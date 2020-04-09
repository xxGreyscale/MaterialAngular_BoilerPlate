import { Component, OnInit } from '@angular/core';

import { DataTableService } from 'src/app/services/data-table.service';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit {
  
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'Channels';
    this.dtService.currentPageTitle = 'Channels';
    this.dtService.createButtonUrl = '/dashboard/forums/channels/create';
    this.dtService.createButton = 'Add Channel';
    this.dtService.getResourcesEndpoint = 'forums/channels';
    this.dtService.searchEndpoint = 'forums/channels/search';
    this.dtService.viewResourceUrl = '/dashboard/forums/channels/';
    this.dtService.searchParam = 'title';    
    
  } 
 

 columnHeader = {'select_box':'select','cover': 'Cover Photo', 'title': 'Title', 'subtitle': 'Subtitle', 'description': 'Description', 'location': 'Location', 'color': 'Color', 'more_option': 'more'};

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

