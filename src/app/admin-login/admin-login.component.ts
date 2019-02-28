import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RestService } from '../services/rest.service';
import {Router} from '@angular/router';
import {InstructionPageComponent} from '../instruction-page/instruction-page.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    console.log(this.loginForm.value);
    this.rest.login(this.loginForm.value).subscribe(val => {
      if(val != null)
      {
      console.log(val);
      this.rest.setUser(val);
      if(val.role == "ROLE_USER")
      {
        console.log("USer role");
        this.router.navigate(['InstructionPageComponent']);
      }
      else
      {
        console.log("Admin Role");
        this.router.navigate(['AdminStartPageComponent']);
      }
    }
    else
    {
      alert('Invalid login. Please enter correct username and password');
      this.loginForm.reset();
    }
    });
  }
}
