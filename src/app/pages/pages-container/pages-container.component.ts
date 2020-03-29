import { Component, OnInit } from '@angular/core';


export interface NavItem {
  icon: string;
  disabled: boolean;
  title: string;
  route: string;
  children: NavItem[];
}

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.scss'],
})
export class PagesContainerComponent implements OnInit {
  isExpanded = true;

  menuList = [
    {
      icon: 'home',
      title: 'Home',
      route: '/dashboard/news-and-articles'
    },
    {
      icon: 'forum',
      title: 'Forums',
      children: [
        { icon: '', title: 'Channels', route: '/dashboard/forums/channels'},
        { icon: '', title: 'Topics', route: '/dashboard/forums/topics'},
      ]
    },
    {
      icon: 'mail',
      title: 'News & Articles',
      route: '/dashboard/news-and-articles'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
