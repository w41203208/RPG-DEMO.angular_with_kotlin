import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character.detail.component';
import { CharacterMainComponent } from './character-main/character.main.component';
import { CharacterComponet } from './character.component';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponet,
    children: [
      // 第一個的設定是預設葉面顯示
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: CharacterMainComponent,
      },
      {
        path: 'detail',
        component: CharacterDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
