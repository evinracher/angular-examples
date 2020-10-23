import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromGames from './store/reducers/games.reducer';
import {GamesComponent} from './games.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    StoreModule.forFeature(fromGames.gamesFeatureKey, fromGames.reducer),
    CommonModule
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule{}
