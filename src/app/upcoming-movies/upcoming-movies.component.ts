import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
movies : Movie[] = []
spinnerFlag : boolean = false;
  constructor( private moviesService : MoviesService) { }

  ngOnInit() {
    this.spinnerFlag = true;
    this.getUpcomingMovies()
  }
  
 getUpcomingMovies(): void {
   this.moviesService.getUpcomingMovies().subscribe(movies => {
    this.spinnerFlag = false;
     return this.movies = movies})
 }

}
