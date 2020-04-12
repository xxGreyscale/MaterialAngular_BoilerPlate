import { Router } from '@angular/router';
import { RequestsService } from 'src/app/services/request-provider.service';
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatSnackBar} from '@angular/material';
import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { DataTableService } from 'src/app/services/data-table.service';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-tables-component.component.html',
  styleUrls: ['./data-tables-component.component.scss']
})
export class DataTablesComponentComponent implements OnInit {
   @Input() columnHeader;
   currentPage: string;
   getResourcesEndpoint;
   viewResourceUrl
   editResourceUrl
   searchEndpoint
   searchParam
   selection = new SelectionModel<any>(true, []);
   data: any[] = [];
  searchForm: any;
  pageTitle: string;
  isObject: boolean = false;
  createBtnUrl: string;
  createBtn: string;

  constructor (private requestService: RequestsService, 
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private dtService: DataTableService,) {
      this.currentPage = this.dtService.currentPage;
      this.pageTitle = this.dtService.currentPageTitle;
      this.createBtnUrl = this.dtService.createButtonUrl;
      this.createBtn = this.dtService.createButton;
      this.getResourcesEndpoint = this.dtService.getResourcesEndpoint;
      this.viewResourceUrl = this.dtService.viewResourceUrl;
      this.editResourceUrl = this.dtService.editResourceUrl;
      this.searchEndpoint = this.dtService.searchEndpoint;
      this.searchParam = this.dtService.searchParam;
      this.searchForm = this.fb.group({
        search: [''],
      });
      
  }

  objectKeys = Object.keys;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort; 

  resultsLength: any = 0;
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;
  _dataSource: MatTableDataSource<any>;

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // getting only the posts in page
    this.dataSource(this.getResource());
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }


  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // get all articles
  getResource(): Observable<any> {
    this.requestService.endPoint = `${this.getResourcesEndpoint}`;
    return this.requestService.get();
  }

  // delete articles function
  deleteData(resource) {
    this.requestService.endPoint = `${this.getResourcesEndpoint}`;
    this.requestService.delete(resource).subscribe(response => {
      const resp: any = response;
      if (resp.message.toString() === 'Success') {
        this.snackBar.open(`Deletion ${resp.message.toString()}`, 'close', {
          duration: 2000,
        });
        this.dataSource(this.getResource());
      }
    });
  }


   // View article funtion for view article button
   viewData(resource) {     
    this.router.navigate([`${this.viewResourceUrl}${resource.id}`], resource.id);
  }

  // Edit article funtion for view article button
  editData(resource) {
    this.router.navigate([`${this.editResourceUrl}${resource.id}`], resource.id);
  }

   // Search logic
   search(event: Event) {
    let searchValue: string;
    // search API here, we set a timeout and it will activate after 500ms
    setTimeout(() => {
       searchValue = (event.target as HTMLInputElement).value;
       this.dataSource(this.getSearchData(this.sort.active, this.sort.direction, this.paginator.pageIndex, searchValue));
    }, 500);
  }

  getSearchData(sort: string, order: string, page: number, query: string): Observable<any> {
    this.requestService.endPoint = this.searchEndpoint;
    return this.requestService.fetchContent(this.searchParam, query);
  }

  goToCreateResourcePage(){
    this.router.navigate([`${this.createBtnUrl}`]);
  }
  
  dataSource(observable: Observable<any>) {    
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return observable
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.data.length;
          this.data = data.data;  
          console.log(this.data);
                  
          return data.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the Id8 API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this._dataSource = new MatTableDataSource<any>(data);
        this._dataSource.sort = this.sort;
        this._dataSource.paginator = this.paginator;
      });
  }
  
}
