import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, AfterViewInit {
  searchForm: any;
  selection = new SelectionModel<any>(true, []);

  displayedColumns: string[] = ['select', 'title', 'subtitle', 'description', 'location', 'color', 'is private', 'more'];
  data: any[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  _dataSource: MatTableDataSource<any>;

  constructor(private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder,
              private router: Router) {
                this.searchForm = this.fb.group({
                  search: [''],
                });
}

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource(this.getForumPosts(this.sort.active, this.sort.direction, this.paginator.pageIndex));
  }

  getForumPosts(sort: string, order: string, page: number): Observable<any> {
    this.requestService.endPoint = 'forums/posts';
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
    this.requestService.endPoint = `forums/posts`;
    this.requestService.delete(resource).subscribe(response => {
      const resp: any = response;
      if (resp.message.toString() === 'Success') {
        this.snackBar.open('Article deleted', 'Undo', {
          duration: 2000,
        });
        this.dataSource(this.getForumPosts(this.sort.active, this.sort.direction, this.paginator.pageIndex));
      }
    });
  }

  viewArticle(resource) {
    this.router.navigate([`/dashboard/forums/channels/${resource.id}`], resource.id);
  }

  editArticle(resource) {
    this.router.navigate([`/dashboard/forums/channels/edit-channel/${resource.id}`], resource.id);
  }

    // Search logic
    search(event: Event) {
      let searchValue: string;
      // search API here, we set a timeout and it will activate after 500ms
      setTimeout(() => {
         searchValue = (event.target as HTMLInputElement).value;
         console.log(searchValue);
         this.dataSource(this.getSearchData(this.sort.active, this.sort.direction, this.paginator.pageIndex, searchValue));
      }, 500);
    }

    getSearchData(sort: string, order: string, page: number, query: string): Observable<any> {
      this.requestService.endPoint = 'forums/posts/search';
      return this.requestService.fetchContent('content', query);
    }

    dataSource(observable: Observable<any>) {
      merge(this.sort.sortChange, this.paginator.page)
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
        ).subscribe(data => {
          this._dataSource = new MatTableDataSource<any>(data);
        });
    }



}
