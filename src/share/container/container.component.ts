import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ming-container',
  template: `
    <div
      [ngClass]="[
        align === undefined ? 'items-center' : align,
        'container-outer'
      ]"
    >
      <div [ngClass]="'container'">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input()
  align: string | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
