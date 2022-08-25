import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //@Output([alias]) decorator, alias is optional
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent: string}>();

  serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  //use local ref in ts, If you DON'T access the selected element in ngOnInit, set static: false. static is always false on default. Only need to add { static: true } 
  @ViewChild('serverContent') inputserverContent : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputServerName : HTMLInputElement) {
    this.serverCreated.emit({serverName: inputServerName.value, serverContent: this.inputserverContent.nativeElement.value});
  }

  onAddBlueprint(inputServerName : HTMLInputElement) {
    this.blueprintCreated.emit({serverName: inputServerName.value, serverContent: this.inputserverContent.nativeElement.value});
  }

}
