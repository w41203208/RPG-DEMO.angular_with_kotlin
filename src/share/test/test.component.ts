import { Component } from '@angular/core';

@Component({
  selector: 'ming-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  log = 'HI! HI! This is test!';

  constructor() {}
}
