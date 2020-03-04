import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
movies : Movie[] = [];
  constructor( private moviesService : MoviesService) { }

  ngOnInit() {
    this.getTopRatedMovies() ;
  }
getTopRatedMovies () :void{
  this.moviesService.getTopRatedMovies().subscribe(movies => this.movies = movies);

}

}
