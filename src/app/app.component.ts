import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="h-screen">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
