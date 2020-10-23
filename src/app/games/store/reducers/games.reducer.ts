import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Game} from '../../game';
import {Action, createReducer, on} from '@ngrx/store';
import * as GameActions from '../actions/games.actions';

export const gamesFeatureKey = 'games';

export interface GamesState extends EntityState<Game> {
}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialGamesState: GamesState = adapter.getInitialState();

export const gameReducer = createReducer(
  initialGamesState,
  on(GameActions.addGame, (state, {payload}) => {
    return adapter.addOne(payload.game, state);
  })
);

export function reducer(state: GamesState | undefined, action: Action): any {
  return gameReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
