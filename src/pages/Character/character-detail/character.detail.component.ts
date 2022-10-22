import { Component } from '@angular/core';

@Component({
  selector: 'ming-character-detail',
  template: ` <h1 class="text-3xl font-medium">{{ pageMention }}</h1> `,
  styleUrls: ['./character.detail.component.scss'],
})
export class CharacterDetailComponent {
  pageMention = 'Coming Soon!~~~~';
}
