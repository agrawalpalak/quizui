import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit {

  users:any = [];
  result:any = [];
  displayResult:any = [];
  constructor(private rest: RestService, private router: Router) { 
    this.rest.getAllUsers().subscribe(resp => {
      this.users = resp;
    })
  }

  getResultByUserId(userid)
  {
    this.rest.getResult(userid).subscribe(resp => {
      this.result = resp;
      for(let i=0; i< this.result.length; i++)
      {
        let score = this.result[i].score;
        let per = (score/15.0)*100;
        if(per >=40)
        {
          this.result[i].status = "PASS";
        }
        else
        {
          this.result[i].status = "FAIL";
        }
      }
    });
  }

  ngOnInit() {
    this.currentUser = this.rest.getUser();
    // console.log(this.currentUser);
    if(!this.currentUser.hasOwnProperty('id'))
    {
      this.router.navigate(['login'])
    } 
  }
  currentUser:any;
}
