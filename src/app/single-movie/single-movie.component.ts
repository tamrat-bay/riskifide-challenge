import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/Movie';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  movie : Movie;

  imgUrl = "https://image.tmdb.org/t/p/w500";

  constructor( 
    private activatedRoute : ActivatedRoute,
    private moviesService : MoviesService
    
    ) { }

  ngOnInit() {
    this.getMovieById()
  }
 getMovieById() :void {
   const id = this.activatedRoute.snapshot.paramMap.get('id');
   console.log('movie id',id);
   
     this.moviesService.getMoviesById(id).subscribe(movie => {
      console.log('Movie By Id',movie);
       
     return this.movie = movie})
 }
 goBack() : void{
   history.back()
 }
  
}
