import {Component, OnInit} from '@angular/core';
import {thoughts} from './thoughts';
import {Thought} from './thought';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'zajecia2';
  list = thoughts;
  todayDate = new Date();
  text: '';

  addTask() {
    this.list.push(
      {date: this.todayDate, text: this.text}
    );
  }

  onDelete(i: number) {
    this.list.splice(i, 1);
  }

  ngOnInit() {
  }
}
