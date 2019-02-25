import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit {

  NoOfUser = [{
    "user": "alisha",
    "score":"70",
    "status":"pass"
  },
{
  "user": "palak",
    "score":"70",
    "status":"pass"
}]

  constructor() { }

  ngOnInit() {
  }

}
