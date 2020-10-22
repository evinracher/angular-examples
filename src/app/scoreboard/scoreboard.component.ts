import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ScoreboardState} from './store/reducers/scoreboard.reducer';
import {selectScore} from './store/selector/scoreboard.selectors';
import {Game} from './game';
import {awayScore, homeScore, resetScore, setScores} from './store/actions/scoreboard.actions';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html'
})
export class ScoreboardComponent implements OnDestroy {
  homeValue: number;
  awayValue: number;
  subscription: Subscription;

  constructor(private store: Store<ScoreboardState>) {
    this.subscription = this.store.pipe(select(selectScore))
      .subscribe(state => {
        this.awayValue = state.away;
        this.homeValue = state.home;
      });
  }

  homeScore(): void {
    this.store.dispatch(homeScore());
  }

  awayScore(): void {
    this.store.dispatch(awayScore());
  }

  resetScores(): void {
    this.store.dispatch(resetScore());
  }

  setScore(event: Event, home: NgModel, away: NgModel): void {
    event.preventDefault();
    this.store.dispatch(setScores({
      game: {
        home: home.value,
        away: away.value
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
