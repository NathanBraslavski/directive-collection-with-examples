import { Component, Input, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable, BehaviorSubject, interval } from "rxjs";
import { take, skip, map } from 'rxjs/operators';

@Component({
  selector: "demo",
  template: "<div>empty<div>",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    console.log("DemoComponent OnInit")
  }
}
