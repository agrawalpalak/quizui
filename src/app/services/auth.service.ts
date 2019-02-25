import { Injectable } from '@angular/core';
import { BASE_URL } from '../base_url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    // now returns an Observable of Config
    console.log("auth called");
    return this.http.get<any>(BASE_URL + "getAllUsers", this.httpOptions).pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

}
