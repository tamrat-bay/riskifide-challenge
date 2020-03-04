import { Component, OnInit , Input } from '@angular/core';
import { History } from '../model/History';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {
@Input() historyItem : History;
  constructor() { }

  ngOnInit() {
    console.log(this.historyItem);
    
  }

}
