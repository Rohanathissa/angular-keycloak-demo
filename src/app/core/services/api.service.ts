import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8081/api';

  constructor() { }

  getPublic(): Observable<string> {
    return this.http.get(`${this.apiUrl}/public`,
      { responseType: 'text' });
  }

  getProtected(): Observable<string> {
    return this.http.get(`${this.apiUrl}/protected`, { responseType: 'text' });
  }

  getAdmin(): Observable<string> {
    return this.http.get(`${this.apiUrl}/admin`, { responseType: 'text' });
  }
}
