
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
  postToServer(num) {
    return this._http.post('/Tasks', num);
  }
}