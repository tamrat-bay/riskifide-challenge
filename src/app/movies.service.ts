import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/Movie'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http : HttpClient ) { }

  getMoviesByName(inputText):Observable<Movie[]>{
    const apiKey = "d759a614b16c0c1c0295b4313e94aeec";
    //! complete the movie img
    const imgUrl = "https://image.tmdb.org/t/p/w500";

    return  this.http.get<Movie[]>(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${inputText}&language=en-US&page=1&include_adult=false`);

    }

  

}
