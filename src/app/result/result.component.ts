import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: any;
  percent:any;
  ispass:boolean=false;
  constructor(private auth: AuthService, private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params => {
      this.score = params.score;
      this.percent=(this.score/15)*100;
      if(this.percent>=70){
        this.ispass=true;
      }else{
        this.ispass=false;
      }
    })
    }

}
