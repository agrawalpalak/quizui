import { Injectable } from '@angular/core';
import { BASE_URL } from '../base_url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<any> {
    return this.http.get<any>(BASE_URL + "getAllQuestions", this.httpOptions).pipe(map(this.extractData));
  }

  addQuestion(que): Observable<any> {
    // now returns an Observable of Config
    console.log("add question called");
    console.log(que);
    return this.http.post<any>(BASE_URL + "addQuestion", que,this.httpOptions)
    .pipe();
    //catchError(this.handleError('addHero', que))
  }
  
  deleteQuestionById(id): Observable<any> {
    console.log("delete question called");
    return this.http.post(BASE_URL + "deleteQuestionById", id, this.httpOptions)
    .pipe();
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
