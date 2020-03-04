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

}
