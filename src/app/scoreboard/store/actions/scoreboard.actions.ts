import {createAction, props} from '@ngrx/store';
import {Score} from '../../score';

export const homeScore = createAction('[Scoreboard] Home Score');
export const awayScore = createAction('[Scoreboard] Away Score');
export const resetScore = createAction('[Scoreboard] Score Reset');
export const setScores = createAction(
  '[Scoreboard] Set Scores',
  props<{ score: Score }>()
);
