import { Component } from '@angular/core';

@Component({
  selector: 'ming-shop',
  template: ` <h1 class="text-3xl font-medium">{{ pageMention }}</h1> `,
  styleUrls: ['./shop.detail.component.scss'],
})
export class ShopDetailComponent {
  pageMention = 'Coming Soon!~~~~';
}
