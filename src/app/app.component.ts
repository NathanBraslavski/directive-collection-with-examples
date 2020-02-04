import { Component, Input, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable, BehaviorSubject, interval } from "rxjs";
import { take, skip, map } from 'rxjs/operators';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  value$: BehaviorSubject<string> = new BehaviorSubject<string>("first event");
  dynamic$: Observable<string>;
  data = 5;

  ngOnInit(): void {
    this.value$.next("next event");

    // this.dynamic$ = timer(1000).pipe(skip(1), take(5));
    this.dynamic$ = interval(1000).pipe(map(i => `i: ${i}`));
  }
}
