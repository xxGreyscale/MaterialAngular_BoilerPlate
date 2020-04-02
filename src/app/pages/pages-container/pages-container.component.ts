import { Component, OnInit } from '@angular/core';

export interface NavItem {
  icon: string;
  disabled: boolean;
  title: string;
  route: string;
  parent: boolean;
  children: NavItem[];
}

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.scss'],
})
export class PagesContainerComponent implements OnInit {
  isExpanded = true;
  primary = 'primary';
  
  menuList = [
    {
      icon: 'home',
      title: 'Home',
      parent: 'true',
      route: ''
    },
    {
      icon: 'forum',
      title: 'Forums',
      parent: true,
      children: [
        { icon: '', title: 'Channels', parent: false, route: '/dashboard/forums/channels'},
        { icon: '', title: 'Topics', parent: false, route: '/dashboard/forums/topics'},
      ]
    },
    {
      icon: 'mail',
      title: 'News & Articles',
      parent: true,
      route: '/dashboard/news-and-articles'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
