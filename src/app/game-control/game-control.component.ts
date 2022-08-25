import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }
  cnt:number = 0;
  ref: any;

  ngOnInit(): void {
  }

  onStartGameClick() {
    this.ref = setInterval(() => {
      this.cnt++;
      this.gameStarted.emit(this.cnt);
    },1000);  
  }

  onStopGameClick() {
    clearInterval(this.ref);
  }
}
