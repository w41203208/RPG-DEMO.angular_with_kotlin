import { NgModule } from '@angular/core';
import { ShopRoutingModule } from './shop-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/share/share.module';

import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './components/shop-item.component';
import { ShopMainComponent } from './shop-main/shop.main.component';
import { ShopService } from './shop.service';
import { UserService } from 'src/services/user.service';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent, ShopMainComponent],
  imports: [ShareModule, ShopRoutingModule, BrowserModule],
  providers: [ShopService, UserService],
  bootstrap: [ShopComponent],
})
export class ShopModule {}
