import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.scss'],
})
export class PagesContainerComponent implements OnInit {
  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

}
