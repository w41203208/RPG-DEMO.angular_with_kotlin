import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ming-shop-item',
  template: `<div
    class="py-2 px-2 rounded w-72 bg-slate-200 mt-2 relative "
    [style]="{ height: '380px' }"
  >
    <div
      class="w-full h-40 flex justify-center items-center rounded bg-blue-200"
    >
      None
      <!-- <img src="" alt=""> -->
    </div>
    <div class="mx-2">
      <h1 class="py-2 font-extrabold text-lg text-slate-600">{{ name }}</h1>
      <p class="mx-1 text-gray-500">Type：{{ type }}</p>
      <p class="mx-1 text-gray-500">Attr：{{ attr }}</p>
      <p class="mx-1 text-gray-500">Value：{{ value }}</p>
    </div>
    <div class="bottom-2 right-2 absolute">
      <div
        class="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white text-lg font-semibold cursor-pointer"
        (click)="onClickEvt_buyItem(id)"
      >
        BUY
      </div>
    </div>
  </div>`,
})
export class ShopItemComponent {
  @Input() name!: string;
  @Input() type!: string;
  @Input() attr!: string;
  @Input() value!: number;
  @Input() id!: number;
  @Output() buyItemEvent = new EventEmitter<number>();

  onClickEvt_buyItem(id: number) {
    this.buyItemEvent.emit(id);
  }
}
