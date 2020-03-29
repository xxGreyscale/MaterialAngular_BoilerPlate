import { Component, OnInit, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

export interface NavItem {
  icon: string;
  disabled: boolean;
  title: string;
  route: string;
  children: NavItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ],
})


export class MenuComponent {

  @Input() isExpanded;
  @Input() item: NavItem;

  listExpanded: boolean;


  constructor(public router: Router) { }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      // this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.listExpanded = !this.listExpanded;
    }
  }

}
