import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieName: string;
  movies: Movie[];
  spinnerFlag : boolean = false;

  constructor(private movieService: MoviesService) { }
  ngOnInit(): void {
  }
  getMovieByName(name: string){
    return this.movieService.getMoviesByName(name)
    .subscribe(movies => {
      this.movies = movies.filter(movie => movie.title);
      this.spinnerFlag = false;
    })

  }

  onSubmit(): void{
    this.spinnerFlag = true
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
