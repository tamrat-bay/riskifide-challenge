import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieName:string;
  movies:Movie[] = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }


  getMovieByName(name:string){
    return this.movieService.getMoviesByName(name)
    .subscribe(movies => {

    });
  
  }
  onSubmit():void {
 
    this.getMovieByName(this.movieName)
    console.log(this.movies);

  }

}
