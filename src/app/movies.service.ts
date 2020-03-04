import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/Movie';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = "d759a614b16c0c1c0295b4313e94aeec";
  
  constructor( private http: HttpClient ) { }

  getMoviesByName(inputText): Observable<Movie[]> {
    const moviesUrl = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${inputText}&language=en-US&page=1&include_adult=false`
    return  this.http.get<{results: Movie[]}>(moviesUrl).pipe(
      map(result => result.results)
    );
    }

  getMoviesById(movie_id): Observable<Movie> {
    const moviesUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=en-US`
    return  this.http.get<Movie>(moviesUrl);
    }

  getTopRatedMovies(): Observable<Movie[]> {
    const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
    return  this.http.get<{results : Movie[]}>(moviesUrl)
    .pipe(
      map(result=> result.results));
    }
  getUpcomingMovies(): Observable<Movie[]> {
    const moviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`
    return  this.http.get<{results : Movie[]}>(moviesUrl)
    .pipe(
      map(result=> result.results));
    }

}
