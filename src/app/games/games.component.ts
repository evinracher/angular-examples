import {Component} from '@angular/core';
import {Game} from './game';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {GamesState} from './store/reducers/games.reducer';
import {selectAllGames} from './store/selectors/games.selector';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  games: Game[];

  constructor(private store: Store<GamesState>) {
    console.log(selectAllGames);
    this.store.select(selectAllGames)
      .subscribe(
        games => {
          console.log(games);
          this.games = games;
        }
      );
  }
}
