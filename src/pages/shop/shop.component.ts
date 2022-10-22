import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

interface Link {
  id: string;
  name: string;
  link: string;
}

@Component({
  selector: 'ming-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  navList: Array<Link> = [
    {
      id: v4(),
      name: 'Main',
      link: 'shop/main',
    },
    {
      id: v4(),
      name: 'Detail',
      link: 'shop/detail',
    },
  ];
  currentRoute!: string;

  constructor(private router: Router, private location: Location) {}

  onClickEvt_goHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.currentRoute = this.pathAnalyze(this.location.path()); //this.router.url
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = this.pathAnalyze(e.url);
      }
    });
  }

  pathAnalyze(path: string): string {
    return path
      .split('/')
      .filter((p) => p !== '')
      .join('/');
  }
}
