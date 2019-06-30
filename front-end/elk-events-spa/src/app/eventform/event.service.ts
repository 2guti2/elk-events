import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient) { }

  async save(event) {
    const _options = { headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post(`http://localhost:8000/events`, event, _options).toPromise();
  }
}
