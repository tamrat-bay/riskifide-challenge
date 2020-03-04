import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { HistoryComponent } from './history/history.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: MoviesComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'movies/:id', component: SingleMovieComponent},
  {path: 'Watchlater', component: WatchLaterComponent},
  {path: 'toprated', component: TopRatedMoviesComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
