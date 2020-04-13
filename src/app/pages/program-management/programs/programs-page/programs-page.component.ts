import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request-provider.service';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-programs-page',
  templateUrl: './programs-page.component.html',
  styleUrls: ['./programs-page.component.scss']
})
export class ProgramsPageComponent implements OnInit {
 
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'programs'
    this.dtService.currentPageTitle = 'Programs'
    this.dtService.createButton = "Create New Program"
    this.dtService.createButtonUrl = '/dashboard/program-management/create'
    this.dtService.getResourcesEndpoint = 'programs';
    this.dtService.viewResourceUrl = '/dashboard/program-management/program/'
    this.dtService.searchEndpoint = 'posts/search';
    this.dtService.searchParam = 'title';    
    
  }
 

 columnHeader1 = {'select_box':'select','name': 'Name', 'has_opened': 'Active', 'application_opens_at': 'Application Opens At', 'application_closes_at': 'Application Closes At', 'hub_id': 'Sector', 'more_option': 'more'};

 startups: any;

 ngOnInit(): void {
   window.setTimeout(() => {
    this.dataIsLoaded = true;
   }, 500)
 }

}
