import { RequestsService } from './../../services/request-provider.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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
      parent: true,
      route: ''
    },
    {
      icon: 'person',
      title: 'Users',
      parent: true,
      children: [
        {icon: '', title: 'Startups', parents: false,  route: '/dashboard/users/startups'},
        {icon: '', title: 'Mentors', parents: false,  route: '/dashboard/users/mentors'},
        {icon: '', title: 'Program Admins', parents: false,  route: '/dashboard/users/mentors'},
      ]
    },
    {
      icon: 'forum',
      title: 'Forums',
      parent: true,
      children: [
        { icon: '', title: 'Channels', parent: false, route: '/dashboard/forums/channels'},
        { icon: '', title: 'Topics', parent: false, route: '/dashboard/forums/topics'},
        { icon: '', title: 'Posts', parent: false, route: '/dashboard/forums/posts'},
      ]
    },
    {
      icon: 'dns',
      title: 'Program Mgmt',
      parent: true,
      children: [
        { icon: '', title: 'Programs', parent: false, route: '/dashboard/forums/channels'},
        { icon: '', title: 'Program Applications', parent: false, route: '/dashboard/forums/topics'},
        { icon: '', title: 'Solutions', parent: false, route: '/dashboard/forums/posts'},
      ]
    },
    {
      icon: 'mail',
      title: 'News & Articles',
      parent: true,
      route: '/dashboard/news-and-articles'
    },
  ];

  constructor(private storageService: StorageService,
              private snackBar: MatSnackBar,
              private router: Router,
              private request: RequestsService) { }

  ngOnInit() {
  }

  // custom functions here
  logout() {
    this.request.endPoint = `logout`;
    this.request.post().subscribe(response => {
      const responseCatcher: any = response;

      // if the logout is success full
      if(responseCatcher.code === 200){
        this.storageService.clearTokens();
        this.snackBar.open('Loging out, Comeback Soon!', 'close', {
          duration: 2000,
        });
        window.setTimeout(()=> {
          this.router.navigate(['auth']);
        }, 1000)
      } else {
        this.snackBar.open(`${responseCatcher.message}`, 'Undo', {
          duration: 2000,
        });
      }
    })
  }

}
