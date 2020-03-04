import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieName: string;
  movies: Movie[];
  constructor(private movieService: MoviesService) { }
  ngOnInit(): void {
  }
  getMovieByName(name: string){
    return this.movieService.getMoviesByName(name)
    .subscribe(movies => {
      console.log('movies.results', movies);
      this.movies = movies.filter(movie => movie.title)})

  }

  onSubmit(): void{
    this.getMovieByName(this.movieName);
    this.saveInHistory();
  }
  saveInHistory(): void {
    const historyItems = localStorage.getItem('searchHistory');
    const date = new Date().toDateString();
    const toSave = {search: this.movieName, date: date }
    if (historyItems) {
      const data = JSON.parse(historyItems);
      data.push(toSave);
      localStorage.setItem('searchHistory', JSON.stringify(data))
    } else {
      const toSaveArray =[ {search: this.movieName, date : date} ]
      localStorage.setItem('searchHistory', JSON.stringify(toSaveArray))
    }
  }
  }
