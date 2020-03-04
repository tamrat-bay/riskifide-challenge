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
<<<<<<< HEAD
import { WatchLaterComponent } from './watch-later/watch-later.component';
=======
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
>>>>>>> 444be5959b6905de9889a055d681edd8d0367fa2



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    SingleMovieComponent,
    HistoryComponent,
    NotfoundComponent,
<<<<<<< HEAD
    WatchLaterComponent
=======
    TopRatedMoviesComponent
>>>>>>> 444be5959b6905de9889a055d681edd8d0367fa2
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
