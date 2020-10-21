import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {increment, decrement, reset} from '../store/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // DONE: This stream will connect to the current store `count` state
    this.count$ = store.select('count');
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
