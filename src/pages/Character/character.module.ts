import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from 'src/services/user.service';
import { ShareModule } from 'src/share/share.module';
import { CharacterDetailComponent } from './character-detail/character.detail.component';
import { CharacterMainComponent } from './character-main/character.main.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponet } from './character.component';

@NgModule({
  declarations: [
    CharacterComponet,
    CharacterMainComponent,
    CharacterDetailComponent,
  ],
  imports: [BrowserModule, ShareModule, CharacterRoutingModule],
  bootstrap: [CharacterComponet],
  providers: [UserService],
})
export class CharacterModule {}
