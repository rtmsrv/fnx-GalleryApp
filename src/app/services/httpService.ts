import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class HttpService {
  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
    // Add more default headers here if needed
  });
  constructor(private http: HttpClient) {}
  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const httpOptions = {
      headers: headers ? headers : this.defaultHeaders
    };
    return this.http.get<T>(url,httpOptions);
  }
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const httpOptions = {
      headers: headers ? headers : this.defaultHeaders
    };
    return this.http.post<T>(url, body,httpOptions);
  }
}
