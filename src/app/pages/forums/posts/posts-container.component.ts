import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-container',
  template: `<router-outlet></router-outlet>`,
})
export class PostsContainerComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
