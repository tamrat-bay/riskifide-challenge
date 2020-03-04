import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { HistoryComponent } from './history/history.component';
import { NotfoundComponent } from './notfound/notfound.component';
<<<<<<< HEAD
import { WatchLaterComponent } from './watch-later/watch-later.component';
=======
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
>>>>>>> 444be5959b6905de9889a055d681edd8d0367fa2


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: MoviesComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'movies/:id', component: SingleMovieComponent},
<<<<<<< HEAD
  {path: 'Watchlater', component: WatchLaterComponent},
  {path: '**', component: NotfoundComponent},
=======
  {path: 'toprated', component: TopRatedMoviesComponent},
  {path: '**', component: NotfoundComponent}
>>>>>>> 444be5959b6905de9889a055d681edd8d0367fa2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
