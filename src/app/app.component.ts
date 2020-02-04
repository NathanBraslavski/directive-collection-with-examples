import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   value$: BehaviorSubject<string> = new BehaviorSubject<string>('event');
  abc = 5;

   ngOnInit(): void { 
     this.value$.next('test')
   }
}
