import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
  task: Object;
  constructor(private _httpService: HttpService){};
  ngOnInit() {
    this.getTasksFromHttp();
  }
  getTasksFromHttp() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['Tasks'];
      console.log(this.tasks);
    });
    let onetask = this._httpService.getOne("5dc344e8c58fbe07503ff2b1");
    onetask.subscribe(data => {
      this.task = data;
      console.log(this.task);
    })
  }
}
