import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/navitem/navitem.component';
import { NavListComponent } from './navbar/navlist/navlist.component';
import { ContainerComponent } from './container/container.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TestComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    NavItemComponent,
    NavListComponent,
    ContainerComponent,
  ],
  imports: [AppRoutingModule, CommonModule],
  exports: [
    TestComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    NavItemComponent,
    NavListComponent,
    ContainerComponent,
  ],
})
export class ShareModule {}
