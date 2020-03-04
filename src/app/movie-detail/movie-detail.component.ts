<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
=======
import { Component, OnInit , Input} from '@angular/core';
import { Movie } from '../model/Movie';

>>>>>>> 9690aa3bd57a6114192598607841db84dc9cb3ad
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
