import * as fromGames from '../reducers/games.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GamesState} from '../reducers/games.reducer';

export const selectGamesState = createFeatureSelector<GamesState>(fromGames.gamesFeatureKey);

export const selectAllGames = createSelector(
  selectGamesState,
  fromGames.selectAll
);
