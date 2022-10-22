import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ming-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit() {
    // console.log('Header Component Init');
  }

  ngOnChanges() {
    // console.log('Header is changed!');
  }
}
