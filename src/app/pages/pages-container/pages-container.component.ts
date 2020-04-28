import { RequestsService } from './../../services/request-provider.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { menu } from '../menu';

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
  
  menuList = menu.list;

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
