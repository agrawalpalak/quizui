import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {
  currentUser:any;
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.rest.getUser();
    // console.log(this.currentUser);
    if(!this.currentUser.hasOwnProperty('id'))
    {
      this.router.navigate(['login'])
    } 
  }

}
