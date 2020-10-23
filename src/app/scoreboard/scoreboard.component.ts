import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ScoreboardState} from './store/reducers/scoreboard.reducer';
import {selectScore} from './store/selector/scoreboard.selectors';
import {awayScore, homeScore, resetScore, setScores} from './store/actions/scoreboard.actions';
import {NgModel} from '@angular/forms';
import {addGame} from '../games/store/actions/games.actions';

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
      score: {
        home: home.value,
        away: away.value
      }
    }));
  }

  saveGame(): void {
    this.store.dispatch(addGame({
      payload: {
        game: {
          id: Math.floor((Math.random() * 100) + 1),
          home: this.homeValue,
          away: this.awayValue
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
