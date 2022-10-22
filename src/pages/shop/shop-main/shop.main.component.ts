import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { ShopItemComponent } from '../components/shop-item.component';
import { ShopService } from '../shop.service';

interface EquipmentItem {
  id: number;
  type: string;
  name: string;
  attribute: string;
  value: number;
}

@Component({
  selector: 'ming-shop',
  template: `<div class="shop-list">
    <ming-shop-item
      *ngFor="let item of items"
      [id]="item.id"
      [name]="item.name"
      [attr]="item.attribute"
      [type]="item.type"
      [value]="item.value"
      (buyItemEvent)="buyItem($event)"
    ></ming-shop-item>
  </div>`,
  styleUrls: ['./shop.main.component.scss'],
})
export class ShopMainComponent implements OnInit {
  pageMention = 'This is Shop page!';
  items!: Array<EquipmentItem>;

  constructor(
    private shopService: ShopService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.shopService.getAllEquipment().subscribe((res: any) => {
      this.items = res.payload;
    });
  }

  buyItem(id: number): void {
    this.userService
      .buyEquipmentAPI(this.userService.getUser().id, id)
      .subscribe((res: any) => {
        this.userService.setUserBag(res.payload);
      });
  }
}
