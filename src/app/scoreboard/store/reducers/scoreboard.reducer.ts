import * as ScoreboardActions from '../actions/scoreboard.actions';
import {Action, createReducer, on} from '@ngrx/store';

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
  on(ScoreboardActions.setScores, (state, {game}) => ({home: game.home, away: game.away}))
);

export function reducer(state: ScoreboardState | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}

export const scoreboardFeatureKey = 'game';
