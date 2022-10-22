import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'ming-character-main',
  template: `<div class="character-card">
    <div
      class="w-full h-80 border-4 border-gray-500 bg-white rounded flex justify-center items-center"
    >
      <div class="w-3/5 h-3/5 imgAnimation">
        <img
          src="../../assets/勇者.png"
          alt=""
          srcset=""
          class="w-full h-full"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 w-full my-2 h-44 text-gray-700">
      <div class="p-3 bg-white rounded ">
        <div *ngIf="user.bodySlot" class=" relative h-full">
          <p>Name：{{ user.bodySlot.name }}</p>
          <p>Type：{{ user.bodySlot.type }}</p>
          <p>Attr：{{ user.bodySlot.attribute }}</p>
          <p>Value：{{ user.bodySlot.value }}</p>
          <button
            class="px-2 py-1 rounded bg-red-400 hover:bg-red-500 absolute left-0 bottom-0"
            (click)="onClickEvt_unmountedEquipment('body_slot')"
          >
            Unmounted
          </button>
        </div>
      </div>
      <div class="p-3 bg-white rounded">
        <div *ngIf="user.handSlot" class=" relative h-full">
          <p>Name：{{ user.handSlot.name }}</p>
          <p>Type：{{ user.handSlot.type }}</p>
          <p>Attr：{{ user.handSlot.attribute }}</p>
          <p>Value：{{ user.handSlot.value }}</p>
          <button
            class="px-2 py-1 rounded bg-red-400 hover:bg-red-500 absolute left-0 bottom-0"
            (click)="onClickEvt_unmountedEquipment('hand_slot')"
          >
            Unmounted
          </button>
        </div>
      </div>
    </div>
    <div class=" font-semibold px-2">
      <p>Name：{{ user.name }}</p>
      <p>Def：{{ state.def }}</p>
      <p>Atk：{{ state.atk }}</p>
    </div>
    <div class="flex-1 mt-2 overflow-y-auto  flex flex-wrap ">
      <div *ngFor="let item of user.userBag" class="item-block">
        <div class="item-content">
          <p>Name：{{ item.equipment.name }}</p>
          <p>Type：{{ item.equipment.type }}</p>
          <p>Attr：{{ item.equipment.attribute }}</p>
          <p>Value：{{ item.equipment.value }}</p>
        </div>
        <button
          class="px-2 py-1 rounded  absolute left-2 bottom-2 bg-green-400 hover:bg-green-500"
          (click)="onClickEvt_mountedEquipment(item.id)"
        >
          Mounted
        </button>
      </div>
    </div>
  </div> `,
  styleUrls: ['./character.main.component.scss'],
})
export class CharacterMainComponent implements OnInit {
  user!: User;
  state!: State;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.state = this.userService.getState();
  }

  onClickEvt_mountedEquipment(bid: string) {
    this.userService
      .mountedEquipmentAPI(this.user.id, bid)
      .subscribe((res: any) => {
        this.userService.mountedEquipment(res.payload.mountedEquipment);
        this.userService.setUserBag(res.payload.bag);
        this.user = this.userService.getUser();
        this.state = this.userService.getState();
      });
  }

  onClickEvt_unmountedEquipment(slotType: string) {
    this.userService
      .unmountedEquipmentAPI(this.user.id, slotType)
      .subscribe((res: any) => {
        console.log(res);
        this.userService.putEquipmentInBag(
          res.payload.addBagItem.item,
          res.payload.addBagItem.bid
        );
        this.userService.unMountedEquipment(res.payload.slotType);
      });
  }
}
