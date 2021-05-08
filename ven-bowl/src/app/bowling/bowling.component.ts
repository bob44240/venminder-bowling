import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.scss']
})
export class BowlingComponent implements OnInit {
  private currentFrame = 0;
  public currentScore = 0;
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

    if (val>10 || val<0) {
      alert("Invalid pin count");
      val=0;
      return;
    }
    if (ball===1) {
      this.frames[frame].firstBall = +val;
    }

    if (ball===2) {
      this.frames[frame].secondBall = +val;
    }

    if  ((this.frames[frame].firstBall +  this.frames[frame].secondBall)>10 ) {
      alert("Invalid frame score.  Total must be less than 10")
      return;
    }

    this.score();
    console.log("score: ",this.currentScore)
    console.log(this.frames)
  }

  score(){
    this.currentScore = 0;
    let currentFrameArrayIndex = 0;
    this.frames.forEach( n=> {
      currentFrameArrayIndex = n.frame-1;
      if (currentFrameArrayIndex<10) {
        n.framescore = n.firstBall + n.secondBall;

        //Handle a strike
        if (n.firstBall === 10 ) {
        //   n.framescore += this.frames[currentFrame].firstBall + this.frames[currentFrame].secondBall;
        //Get next two balls
        n.framescore += this.frames[currentFrameArrayIndex+1].firstBall + this.frames[currentFrameArrayIndex+2].firstBall;
          // if  (this.frames[currentFrameArrayIndex+1].firstBall === 10) {
          //   n.framescore += this.frames[currentFrameArrayIndex+2].firstBall
          // } else {
          //   n.framescore += this.frames[currentFrameArrayIndex+1].secondBall;
          // }
        }

        //Handle a spare
        if (n.firstBall != 10 && n.framescore==10) {
          n.framescore += this.frames[currentFrameArrayIndex+1].firstBall;
        }
      }
    })

    ////Now calc score
    this.currentScore = 0;
    this.frames.forEach( n=> {
      this.currentScore += +n.framescore;
    })
  }
}
