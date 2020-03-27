import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {
  data = {
    title: '',
    subtile: '',
    category: '',
    link: '',
    tags: [],
    published: false,
  }

  constructor() { }

  ngOnInit() {
  }

}
