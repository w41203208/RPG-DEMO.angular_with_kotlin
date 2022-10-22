import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ming-footer',
  template: ` <section class="footer">footer works!</section> `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
