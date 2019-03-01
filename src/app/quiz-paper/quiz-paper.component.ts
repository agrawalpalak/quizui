import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import { RestService } from '../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-paper',
  templateUrl: './quiz-paper.component.html',
  styleUrls: ['./quiz-paper.component.css']
})

export class QuizPaperComponent implements OnInit {

  que: any = [];
  quePaper: any = [];
  answers:any = [];
  currentIndex = 0;
  opt1: any;
  constructor(private rest: RestService, private router:Router) { }

  countDown;
  counter = 600;
  tick = 1000;
  ngOnInit() {
   

    this.rest.getAllQuestions().subscribe(resp => {
      this.countDown = Observable.timer(0, this.tick).take(this.counter).map(() => --this.counter);
      console.log(resp);
      this.que = resp;
      // randomly generate test of 15 questions
      this.generateTest(15);
    }); 
  }
  generateTest(size)
  {
    let temp: any = this.que;
     for(let i=0; i<size; i++)
     {
      var idx = Math.floor(Math.random() * temp.length);
      this.quePaper.push(temp[idx]);
      temp.splice(idx, 1);
     }
     
  }
  submitTest()
  {
    this.quePaper[this.currentIndex].selected = this.opt1;
    this.quePaper[this.currentIndex].isCorrect = false;
    if(this.opt1 === this.quePaper[this.currentIndex].answer)
      this.quePaper[this.currentIndex].isCorrect = true;
      let correctAnswers = 0;
    // calculate the result and post it to the server
    for(let i=0; i< this.quePaper.length; i++)
    {
      if(this.quePaper[i].isCorrect)
        correctAnswers++;
    }

    console.log("Your score: " + correctAnswers);
    let score:any = {};
    score.score = correctAnswers.toString();
    let user:any = this.rest.getUser();
    console.log(user);

    score.userid = user.id.toString();
    this.rest.updateScore(score).subscribe(resp => {
      console.log(resp);
      alert("Test submitted successfully");
      this.router.navigate(['ResultComponent'],{queryParams: score});
    })
  }
  next()
  {
    console.log(this.opt1);
    
    this.quePaper[this.currentIndex].selected = this.opt1;
    this.quePaper[this.currentIndex].isCorrect = false;
    if(this.opt1 === this.quePaper[this.currentIndex].answer)
      this.quePaper[this.currentIndex].isCorrect = true;
    
      
    
    //console.log(this.quePaper[this.currentIndex]);
    console.log(this.currentIndex);
    if(this.currentIndex < this.quePaper.length -1)
    {
      this.currentIndex++;
      if(this.currentIndex === this.quePaper.length -1)
      {
        this.showSubmit = true;
      }
      this.opt1 = this.quePaper[this.currentIndex].selected;
    }
    
    
  }
  showSubmit: boolean = false;
  prev()
  {
    console.log(this.opt1);
    this.quePaper[this.currentIndex].selected = this.opt1;
    this.quePaper[this.currentIndex].isCorrect = false;
    if(this.opt1 === this.quePaper[this.currentIndex].answer)
      this.quePaper[this.currentIndex].isCorrect = true;
    
    console.log(this.quePaper[this.currentIndex]);
    if(this.currentIndex > 0)
    {
      this.showSubmit = false;
      this.currentIndex--;
      this.opt1 = this.quePaper[this.currentIndex].selected;
    }
  }
}
@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
}
