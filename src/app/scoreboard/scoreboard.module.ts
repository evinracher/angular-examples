import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from './store/reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ],
})
export class ScoreboardModule {}
