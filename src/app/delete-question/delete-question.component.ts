import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

que: any = [];

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getAllQuestions().subscribe(resp => {
      console.log(resp);
      this.que = resp;
    });
  }
  deleteQuestionById(id){
    console.log(id);
    this.rest.deleteQuestionById(id)
    .subscribe(id => { 
      console.log(id);
      this.rest.getAllQuestions().subscribe(resp => {
        console.log(resp);
        this.que = resp;
      });
    });
  }
  // editQuestionById(q){
  //   console.log(q);
  //   this.rest.editQuestionById(q)
  // }
}
