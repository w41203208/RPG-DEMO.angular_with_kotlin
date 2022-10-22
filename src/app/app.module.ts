import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from 'src/share/share.module';
import { HomeModule } from 'src/pages/home/home.module';
import { ShopModule } from 'src/pages/shop/shop.module';
import { LoginModule } from 'src/pages/Login/login.module';
import { CharacterModule } from 'src/pages/Character/character.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShareModule,
    HomeModule,
    ShopModule,
    LoginModule,
    CharacterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
