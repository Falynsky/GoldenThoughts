import {Component, OnInit} from '@angular/core';
import {StorageService} from '../main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private storageService: StorageService) {  }

  title = 'zajecia2';
  list = this.storageService.load('kamil');
  todayDate = new Date();
  public text = 'AAA';


  addTask() {
    this.list.push({text: this.text, date: this.todayDate});
    this.storageService.save('kamil', this.list);
    this.text = '';
  }

  onDelete(i: number) {
    this.list.splice(i, 1);
    this.storageService.save('kamil' , this.list );
  }

  ngOnInit() {
  }
}
