import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/services/request-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  articleId: any;
  article: any;

  constructor(private route: ActivatedRoute,
              private requestService: RequestsService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.route.params.pipe().subscribe(param => {
      this.articleId = param.id;
      this.getArticle(this.articleId);
    });
   }

  ngOnInit() {
    this.getArticle(this.articleId);
  }

  getArticle(resourceId) {
    this.requestService.endPoint = 'posts';
    this.requestService.getWithId(resourceId).subscribe(response => {
      const responseCatcher: any = response;
      this.article = responseCatcher.data;
    });
  }

  deleteArticle() {
    this.requestService.endPoint = `posts`;
    this.requestService.delete(this.article).subscribe(response => {
      const resp: any = response;
      if (resp.message.toString() === 'Success') {
        this.snackBar.open('Article deleted', 'Undo', {
          duration: 1000,
        });
      }
    });
  }

  editArticle() {
    this.router.navigate([`/dashboard/news-and-articles/editing-article/${this.articleId}`], this.articleId);
  }


}
