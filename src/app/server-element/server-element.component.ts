import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom - change in css in server-element will not affect globally. Emulated is default
})
export class ServerElementComponent implements OnInit {
 
  //@Input([alias]) decorator, alias is optional 
  @Input('srvElement') element: {type: string, name: string, content:string};

  //@ContentChild('childContent') paragraph : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  //ngAfterContentInit() {console.log(this.paragraph.nativeElement.textContent);} //print text content of p tag

  //ngOnChange(changes: SimpleChanges) {console.log(changes);} //useful to see previous value of input that is submitted
}
