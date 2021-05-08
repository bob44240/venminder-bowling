import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.scss']
})
export class BowlingComponent implements OnInit {
  private currentFrame = 0;
  private currentScore = 0;
  nextFrame = 0;
  public frames = [
    {frame:1, firstBall:0, secondBall:0, framescore: 0},
    {frame:2, firstBall:0, secondBall:0, framescore: 0},
    {frame:3, firstBall:0, secondBall:0, framescore: 0},
    {frame:4, firstBall:0, secondBall:0, framescore: 0},
    {frame:5, firstBall:0, secondBall:0, framescore: 0},
    {frame:6, firstBall:0, secondBall:0, framescore: 0},
    {frame:7, firstBall:0, secondBall:0, framescore: 0},
    {frame:8, firstBall:0, secondBall:0, framescore: 0},
    {frame:9, firstBall:0, secondBall:0, framescore: 0},
    {frame:10, firstBall:0, secondBall:0, framescore: 0},
    {frame:11, firstBall:0, secondBall:0, framescore: 0},
    {frame:12, firstBall:0, secondBall:0, framescore: 0}
  ]

  constructor() { }

  ngOnInit(): void {}

  getVal(val,frame,ball){
    console.log(val, frame,ball)

    if (ball===1) {
      this.frames[frame].firstBall = +val;
    }

    if (ball===2) {
      this.frames[frame].secondBall = +val;
    }

    this.score();
    console.log("score: ",this.currentScore)
    console.log(this.frames)
  }

  score(){
    this.currentScore = 0;
    let currentFrame = 0;
    this.frames.forEach( n=> {
     // console.log(n);
      currentFrame = n.frame;
      if (currentFrame<11) {
        n.framescore = n.firstBall + n.secondBall;
        if (n.firstBall === 10 ) {
          n.framescore += this.frames[currentFrame].firstBall + this.frames[currentFrame].secondBall;
          if  (this.frames[currentFrame].firstBall === 10) {
            n.framescore += this.frames[currentFrame+1].firstBall
          }
        }
        this.currentScore = 0;
        this.frames.forEach( n=> {
          this.currentScore += +n.framescore;
        })
      }

      //console.log(this.frames)

    })
  }

}
