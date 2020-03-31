import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit, AfterViewInit {

  selection = new SelectionModel<any>(true, []);

  displayedColumns: string[] = ['select', 'coverphoto', 'title', 'description', 'color', 'more'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private router: Router) {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource();
  }

  dataSource() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getTopics(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
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
      ).subscribe(data => {
        this.data = data;
      });
  }

  getTopics(sort: string, order: string, page: number): Observable<any> {
    this.requestService.endPoint = 'forums/topics';
    return this.requestService.get();
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


  deleteArticle(resource) {
    this.requestService.endPoint = `forums/topics`;
    this.requestService.delete(resource).subscribe(response => {
      const resp: any = response;
      if (resp.message.toString() === 'Success') {
        this.snackBar.open('Article deleted', 'Undo', {
          duration: 2000,
        });
        this.dataSource();
      }
    });
  }

  viewArticle(resource) {
    this.router.navigate([`/dashboard/forums/topics/${resource.id}`], resource.id);
  }

  editArticle(resource) {
    this.router.navigate([`/dashboard/forums/topics/create/${resource.id}`], resource.id);
  }

}
