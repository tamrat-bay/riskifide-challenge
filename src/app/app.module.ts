import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { HistoryItemComponent } from './history-item/history-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    SingleMovieComponent,
    HistoryComponent,
    NotfoundComponent,
    WatchLaterComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
