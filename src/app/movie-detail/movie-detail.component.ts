import { Component, OnInit , Input} from '@angular/core';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
  
  constructor() { }
  ngOnInit() {
    
  }

}
