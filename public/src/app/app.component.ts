import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  task: Object;
  constructor(private _httpService: HttpService){};
  getTasksFromHttp() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['Tasks'];
      console.log(this.tasks);
    });
  }
  getTask(id: string) {
    let onetask = this._httpService.getOne(id);
    onetask.subscribe(data => {
      this.task = data;
      console.log(this.task);
    })
  }
  getByEvent(event) {
    if (event.srcElement.value != ""){
      let title = event.srcElement.value;
      this._httpService.getTasks().subscribe(data => {
        for (let check of data['Tasks']) {
          if (title == check['title']) {
            this._httpService.getOne(check['_id']).subscribe(data =>{
              this.task = data;
            })
          }
        }
      })
    }
  }
}
