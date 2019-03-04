import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../base_url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service';

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
  currentUser = {};
  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  setUser(u)
  {
    this.currentUser = u;
    this.storage.set('user',u);
  }
  getUser()
  {
    return this.storage.get('user');
  }
  updateScore(score)
  {
    return this.http.post<any>(BASE_URL + "addResult", score,this.httpOptions)
    .pipe();
  }
  getAllQuestions(): Observable<any> {
    return this.http.get<any>(BASE_URL + "getAllQuestions", this.httpOptions).pipe(map(this.extractData));
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(BASE_URL + "getAllUsers", this.httpOptions).pipe(map(this.extractData));
  }

  getResult(userid){
    return this.http.get<any>(BASE_URL + "getResultById/" + userid, this.httpOptions).pipe(map(this.extractData));
  }
  login(data){
    console.log("login called");
    console.log(data);
    return this.http.post<any>(BASE_URL + "login", data,this.httpOptions)
    .pipe();
  }
  logout(){
    console.log("logging out");
    this.storage.remove('user');
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

  // editQuestionById(q): Observable<any> {
  //   console.log("edit question called");
  //   return this.http.post(BASE_URL + "editQuestionById", q, this.httpOptions)
  //   .pipe();
  // }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
