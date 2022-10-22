import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

interface Link {
  id: string;
  name: string;
  link: string;
}

@Component({
  selector: 'ming-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pageMention = 'This is Home page!';
  navList: Array<Link> = [
    {
      id: v4(),
      name: 'Shop',
      link: 'shop',
    },
    {
      id: v4(),
      name: 'Character',
      link: 'Character',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit(): void {
  //   this.router.events.subscribe((e: any) => {
  //     if (e instanceof NavigationEnd) {
  //       this.currentRoute = e.url
  //         .split('/')
  //         .filter((path) => path !== '')
  //         .join('/');
  //     }
  //   });
  // }
}
