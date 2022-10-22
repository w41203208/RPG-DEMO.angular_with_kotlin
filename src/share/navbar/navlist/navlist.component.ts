import { Component } from '@angular/core';

@Component({
  selector: 'ming-navlist',
  template: `
    <ul class="navList">
      <ng-content></ng-content>
    </ul>
  `,
  styleUrls: ['./navlist.component.scss'],
})
export class NavListComponent {
  constructor() {}
}
