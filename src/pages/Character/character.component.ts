import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { v4 } from 'uuid';

interface Link {
  id: string;
  name: string;
  link: string;
}

@Component({
  selector: 'ming-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponet implements OnInit {
  navList: Array<Link> = [
    {
      id: v4(),
      name: 'Main',
      link: 'character/main',
    },
    {
      id: v4(),
      name: 'Detail',
      link: 'character/detail',
    },
  ];
  currentRoute!: string;

  constructor(private router: Router, private location: Location) {}

  onClickEvt_goHome() {
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
