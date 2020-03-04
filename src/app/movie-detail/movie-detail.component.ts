import { Component, OnInit , Input} from '@angular/core';
import { Movie } from '../model/Movie';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
   imgUrl = 'https://image.tmdb.org/t/p/w500';
  constructor( private router: Router ) { }

  ngOnInit() {

  }
  onSelect(id): void {
       console.log(id);
       this.router.navigate(['/movies', id]);
  }

Watchlater(itamData): void {

console.log(itamData,'Watchlater');
const toSave = {
  id: itamData.id,
  poster_path: itamData.poster_path,
  title: itamData.title,
  overview: itamData.overview
};
const WatchlaterItems = localStorage.getItem('Watchlater');

if (WatchlaterItems) {
      const data = JSON.parse(WatchlaterItems);
      data.push(toSave);
      localStorage.setItem('Watchlater', JSON.stringify(data))
    } else {
      const toSaveArray =[toSave];
      localStorage.setItem('Watchlater', JSON.stringify(toSaveArray))
    }
  }

}
