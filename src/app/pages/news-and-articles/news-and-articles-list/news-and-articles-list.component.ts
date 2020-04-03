import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RequestsService } from 'src/app/services/request-provider.service';
import { Observable, merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface PostsApi {
  items: any[];
  total_count: number;
}

@Component({
  selector: 'app-news-and-articles-list',
  templateUrl: './news-and-articles-list.component.html',
  styleUrls: ['./news-and-articles-list.component.scss']
})
export class NewsAndArticlesListComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line: variable-name
  _dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  searchForm: any;

  displayedColumns: string[] = ['select', 'coverphoto', 'title', 'category', 'subtitle', 'link', 'tags', 'published', 'more'];
  data: PostsApi[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder,
              private router: Router) {
                this.searchForm = this.fb.group({
                  search: [''],
                });
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // getting only the posts in page
    this.dataSource(this.getPosts(this.sort.active, this.sort.direction, this.paginator.pageIndex));
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

  // get all articles
  getPosts(sort: string, order: string, page: number): Observable<any> {
    this.requestService.endPoint = 'posts';
    return this.requestService.get();
  }

  // delete articles function
  deleteArticle(resource) {
    this.requestService.endPoint = `posts`;
    this.requestService.delete(resource).subscribe(response => {
      const resp: any = response;
      if (resp.message.toString() === 'Success') {
        this.snackBar.open('Article deleted', 'Undo', {
          duration: 2000,
        });
        this.dataSource(this.getPosts(this.sort.active, this.sort.direction, this.paginator.pageIndex));
      }
    });
  }

  // View article funtion for view article button
  viewArticle(resource) {
    this.router.navigate([`/dashboard/news-and-articles/article/${resource.id}`], resource.id);
  }

  // Edit article funtion for view article button
  editArticle(resource) {
    this.router.navigate([`/dashboard/news-and-articles/editing-article/${resource.id}`], resource.id);
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
    this.requestService.endPoint = 'posts/search';
    return this.requestService.fetchContent('title', query);
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
