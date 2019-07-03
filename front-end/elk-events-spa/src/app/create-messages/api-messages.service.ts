import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMessagesService {

  constructor(private http: HttpClient) { }

  async save(msg) {
    const _options = { headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post(`http://localhost:8001/messages`, msg, _options).toPromise();
  }
}
