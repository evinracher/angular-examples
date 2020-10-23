import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {counterReducer} from './my-counter/store/reducers/counter.reducer';
import {MyCounterComponent} from './my-counter/my-counter.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScoreboardModule} from './scoreboard/scoreboard.module';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {FormsModule} from '@angular/forms';
import {GamesModule} from './games/games.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    HomeComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScoreboardModule,
    GamesModule,
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
