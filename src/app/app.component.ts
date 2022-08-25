import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  odds:number[]=[];
  evens:number[]=[];
  
  onServerAdded(serverData : {serverName : string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData : {serverName : string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  // onGameStarted(gameData : number) {
  //   if (gameData%2 == 0) {
  //     this.evens.push(gameData);
  //   }
  //   else {
  //     this.odds.push(gameData);
  //   }
  // }
  
  oddEvenCnt : number;
  onGameStarted(gameData : number) {
    this.oddEvenCnt = gameData;
  }
}
