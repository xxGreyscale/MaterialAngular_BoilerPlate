import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-article-page',
  templateUrl: './edit-article-page.component.html',
  styleUrls: ['./edit-article-page.component.scss']
})
export class EditArticlePageComponent implements OnInit {

  constructor() {
   }

  data = {
    title: 'hobohobo',
    subtile: 'jdksjknf',
    category: 'option2',
    link: 'www.google.com',
    tags: ['hugo', 'hugo', 'hugo'],
    published: true,
  }

  ngOnInit() {
  }

}
