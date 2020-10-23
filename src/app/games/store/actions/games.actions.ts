import {createAction, props} from '@ngrx/store';
import {Game} from '../../game';

export const addGame = createAction(
  '[Game Component] Add Game',
  props<{ payload: { game: Game } }>()
);
