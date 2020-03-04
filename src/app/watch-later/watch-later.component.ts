import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss']
})
export class WatchLaterComponent implements OnInit {
  movies: Movie[] = [];
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  constructor() { }

  ngOnInit() {
    this.getwatchlater();

  }

  getwatchlater(): void {
    const WatchList = JSON.parse(localStorage.getItem('Watchlater'));
    this.movies = WatchList;
    console.log(WatchList);
  }
  goBack(): void {
    history.back();
  }
}
