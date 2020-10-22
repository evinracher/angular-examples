import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromScoreboard from '../reducers/scoreboard.reducer';

export const selectScoreboardState = createFeatureSelector<fromScoreboard.ScoreboardState>(
  fromScoreboard.scoreboardFeatureKey,
);

export const selectScore = createSelector(
  selectScoreboardState,
  (state: fromScoreboard.ScoreboardState) => state
);
