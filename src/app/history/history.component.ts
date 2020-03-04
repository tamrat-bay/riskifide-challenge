import { Component, OnInit } from '@angular/core';
import { History } from '../model/History';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
history: History[];

  constructor() { }

  ngOnInit(): void {
    this.getHistoryData();
  }

  getHistoryData():History[] {
    let historyItems = localStorage.getItem('searchHistory');
     return this.history = JSON.parse(historyItems);
}

}