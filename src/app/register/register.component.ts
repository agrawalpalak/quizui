import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { 
    this.auth.getConfig().subscribe(resp => {
      console.log(resp);
    }); 
  }

  registerUser()
  {
    console.log(this.registerForm.value);
    this.auth.registerUser(this.registerForm.value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['login']);
    })
  }
}
