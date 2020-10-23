import * as ScoreboardActions from '../actions/scoreboard.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const scoreboardFeatureKey = 'score';

export interface ScoreboardState {
  home: number;
  away: number;
}

export const initialState: ScoreboardState = {
  home: 0,
  away: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardActions.homeScore, state => ({...state, home: state.home + 1})),
  on(ScoreboardActions.awayScore, state => ({...state, away: state.away + 1})),
  on(ScoreboardActions.resetScore, state => ({home: 0, away: 0})),
  on(ScoreboardActions.setScores, (state, {score}) => ({home: score.home, away: score.away}))
);

export function reducer(state: ScoreboardState | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}
