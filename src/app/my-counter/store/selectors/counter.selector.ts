import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
  count: number;
}

export const selectCountState = createFeatureSelector<number>(
  'count'
);

