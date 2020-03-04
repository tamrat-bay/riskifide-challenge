import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/Movie'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   apiKey = "d759a614b16c0c1c0295b4313e94aeec";
  constructor( private http: HttpClient ) { }

  getMoviesByName(inputText): Observable<Movie[]> {
    const apiKey = "d759a614b16c0c1c0295b4313e94aeec";
    //! complete the movie img
    
    return  this.http.get<{results: Movie[]}>(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${inputText}&language=en-US&page=1&include_adult=false`).pipe(
      map((result) => {
        return result.results 
      })
    );

    }

  getMoviesById(movie_id): Observable<Movie> {
    return  this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=en-US`);
    }

  

}
