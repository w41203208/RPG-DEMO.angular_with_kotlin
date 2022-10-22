import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from 'src/services/user.service';
import { ShareModule } from 'src/share/share.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [ShareModule, BrowserModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
