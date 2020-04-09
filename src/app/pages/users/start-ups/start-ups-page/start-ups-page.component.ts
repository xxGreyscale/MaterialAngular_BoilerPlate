import { Observable } from 'rxjs';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Component, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-start-ups-page',
  templateUrl: './start-ups-page.component.html',
  styleUrls: ['./start-ups-page.component.scss']
})
export class StartUpsPageComponent implements OnInit {

  dataIsLoaded: boolean = false;
  constructor(private requestService: RequestsService, private dtService: DataTableService) {
    this.dtService.currentPage = 'startups'
    this.dtService.currentPageTitle = 'Start-ups'
    this.dtService.getResourcesEndpoint = 'startupusers';
    this.dtService.searchEndpoint = 'startupusers/search';
    this.dtService.searchParam = 'first_name';    
    
  }
 

 columnHeader1 = {'select_box':'select','avatar': 'Avatar', 'first_name': 'First Name', 'middle_name': 'Middle Name', 'last_name': 'Last Name', 'email': 'Email', 'phone': 'Phone', 'country_code': 'Country', 'more_option': 'more'};

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
