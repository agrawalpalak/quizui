import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  questionForm: FormGroup = new FormGroup({
    question: new FormControl(),
    option1: new FormControl(),
    option2: new FormControl(),
    option3: new FormControl(),
    option4: new FormControl(),
    answer: new FormControl(),
  });
  que : any = {};
  
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    
  }
  addQuestion(){
    console.log(this.questionForm.value);
    this.rest.addQuestion(this.questionForm.value)
    .subscribe(que => { 
      console.log(que);
      alert("Question added successfully");
      this.router.navigate(['AdminTestPageComponent']);
    });
  }
}
