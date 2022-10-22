import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ming-navitem',
  template: `
    <a [routerLink]="['/' + link.toLowerCase()]">
      <li
        [ngClass]="{
          navItem: true,
          selected: isSelected
        }"
      >
        {{ name }}
      </li>
    </a>
  `,
  styleUrls: ['./navitem.component.scss'],
})
export class NavItemComponent implements OnChanges, OnInit {
  @Input() name!: string;
  @Input() link!: string;
  @Input() currentRoute!: string;

  isSelected!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isSelected = this.currentRoute === this.link.toLowerCase();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isSelected =
      changes['currentRoute'].currentValue === this.link.toLowerCase();
  }
}
