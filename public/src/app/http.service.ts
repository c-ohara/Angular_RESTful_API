import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

  getTasks() {
    return this._http.get('/Tasks');
  }
  getOne(id: string) {
    return this._http.get('/Tasks/' + id);
  }
  addTask(newTask) {
    return this._http.post("/Tasks", newTask);
  }
  updateTask(editTask) {
    console.log("/Tasks/" + editTask['_id']);
    return this._http.put("/Tasks/" + editTask['_id'], editTask);
  }
  deleteTask(id: string) {
    console.log("/Tasks/" + id);
    this._http.delete("/Tasks/" + id).subscribe(data => console.log(data));
  }
}