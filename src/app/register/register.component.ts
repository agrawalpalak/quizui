import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RestService } from '../services/rest.service';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    role: new FormControl('ROLE_USER')
  });
  users:any = [];
  usernameExists: boolean = false;
  constructor(private auth: AuthService,private rest: RestService, private router: Router) { }

  ngOnInit() { 
    this.auth.getConfig().subscribe(resp => {
      console.log(resp);
    });
    this.rest.getAllUsers().subscribe(resp => {
      this.users = resp;
    })
  }

  registerUser()
  {
    console.log(this.registerForm.value);
    this.auth.registerUser(this.registerForm.value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['login']);
    })
  }
  checkUserName()
  {
    let a = this.registerForm.controls.username.value;
    let b = this.users.find( data => {

      if(data.username === a)
      {
        return data;
      }
    });
    if(b != null)
    {
      this.usernameExists = true;
    }
    else{
      this.usernameExists = false;
    }
  }
}
