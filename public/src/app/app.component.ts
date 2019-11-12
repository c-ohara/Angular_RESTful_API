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
  task: any;
  newTask: any;
  eTask: any;
  valmessages: string[];
  constructor(private _httpService: HttpService){};

  ngOnInit() {
    this.newTask = { title: "", description: "" }
    this.valmessages = [];
    this.getTasksFromHttp();
  }

  getTasksFromHttp() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['Tasks'];
    });
  }
  getTask(id: string) {
    let onetask = this._httpService.getOne(id);
    onetask.subscribe(data => {
      this.task = data;
      console.log(this.task);
    })
  }
  editTask(id: string) {
    this._httpService.getOne(id).subscribe(data => {
      this.eTask = data['currentTask'];
    })
  }
  Delete(id: string) {
    console.log(id);
    this._httpService.deleteTask(id);
    this.getTasksFromHttp();
  }

  Create() {
    this._httpService.addTask(this.newTask).subscribe(
      data => {
        if (data['status'] == false) {
          this.valmessages = data['errors'];
        }
        else {
          this.valmessages = [];
        }
      });
    this.getTasksFromHttp();
    this.newTask = { title: "", description: "" }
  }

  Update() {
    this._httpService.updateTask(this.eTask).subscribe(data => {
      console.log(data);
      if (data['status'] == false) {
        this.valmessages = data['errors'];
      }
      else {
        this.eTask = undefined;
        this.valmessages = [];
      }
    });
    this.getTasksFromHttp();
  }
}
