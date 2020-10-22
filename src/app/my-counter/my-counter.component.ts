import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {increment, decrement, reset} from './store/actions/counter.actions';
import {AppState, selectCountState} from './store/selectors/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;
  count: number;

  constructor(private store: Store<AppState>) {
    // DONE: This stream will connect to the current store `count` state
    this.store.pipe(select(selectCountState))
      .subscribe(count => {
          this.count = count;
        }
      );
  }

  increment(): void {
    // DONE: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement(): void {
    // DONE: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset(): void {
    // DONE: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
