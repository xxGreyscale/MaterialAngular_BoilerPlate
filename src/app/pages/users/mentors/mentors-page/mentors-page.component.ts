import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request-provider.service';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-mentors-page',
  templateUrl: './mentors-page.component.html',
  styleUrls: ['./mentors-page.component.scss']
})
export class MentorsPageComponent implements OnInit {
  
  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'mentors'
    this.dtService.currentPageTitle = 'Mentors'
    this.dtService.createButton = 'Create Mentor';
    this.dtService.createButtonUrl = ''
    this.dtService.viewResourceUrl = ''
    this.dtService.editResourceUrl = ''
    this.dtService.getResourcesEndpoint = 'mentors';
    this.dtService.searchEndpoint = 'mentors/search';
    this.dtService.searchParam = 'first_name';    
    
  }
 

 columnHeader1 = {'select_box':'select','avatar': 'Avatar', 'first_name': 'First Name', 'last_name': 'Last Name', 'gender': 'Gender', 'email': 'Email', 'phone': 'Phone', 'country': 'Country', 'last_activity': 'Last Activity', 'more_option': 'more'};

 startups: any;

 ngOnInit(): void {
   window.setTimeout(() => {
    this.dataIsLoaded = true;
   }, 100)
 }

}
