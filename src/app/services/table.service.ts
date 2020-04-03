import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';



@Injectable()
export class TableService {

    tableEndPoint = '';
    urlEndpoint = '';

  selection = new SelectionModel<any>(true, []);
  searchForm: any;

  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


    constructor(sort: MatSort, paginator: MatPaginator) {

    }

    dataSource(observable: Observable<any>, sortChange, paginatorPage) {
        return merge(sortChange, paginatorPage)
          .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoadingResults = true;
              return observable;
            }),
            map(data => {
              // Flip flag to show that loading has finished.
              this.isLoadingResults = false;
              this.isRateLimitReached = false;
              this.resultsLength = data.data.length;
              return data.data;
            }),
            catchError(() => {
              this.isLoadingResults = false;
              // Catch if the Id8 API has reached its rate limit. Return empty data.
              this.isRateLimitReached = true;
              return observableOf([]);
            })
          );
      }
}
