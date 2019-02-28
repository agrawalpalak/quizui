import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-start-page',
  templateUrl: './admin-start-page.component.html',
  styleUrls: ['./admin-start-page.component.css']
})
export class AdminStartPageComponent implements OnInit {

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    let u:any = this.rest.getUser();
    console.log(u);
    if(u.role != "ROLE_ADMIN")
    {
      this.router.navigate(['login']);
    }
  }

}
