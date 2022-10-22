import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailComponent } from './shop-detail/shop.detail.component';
import { ShopMainComponent } from './shop-main/shop.main.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      // 第一個的設定是預設葉面顯示
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: ShopMainComponent,
      },
      {
        path: 'detail',
        component: ShopDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
