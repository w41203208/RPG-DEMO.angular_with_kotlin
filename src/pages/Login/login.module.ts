import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/share/share.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AppHttpInterceptor } from 'src/services/HttpInterceptor.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, ShareModule, HttpClientModule, FormsModule],
  bootstrap: [LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true, // 去掉看看有啥變化
    },
  ],
})
export class LoginModule {}
