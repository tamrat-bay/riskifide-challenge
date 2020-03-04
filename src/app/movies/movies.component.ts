import { Component, OnInit } from '@angular/core';
import { Movie } from "../model/Movie";
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies : Movie[] = [];
  movieName : string;

  constructor( private movieService:MoviesService  ) { }

  ngOnInit(): void {
    
  }

  // getMovieByName(name:string) {
  //   return this.movieService.getMoviesByName(name)
  //   .subscribe(movies => console.log(movies)
  //   )
  // }
  // onSubmit():void {
  //   console.log(this.movieName);
    
  // }

}
