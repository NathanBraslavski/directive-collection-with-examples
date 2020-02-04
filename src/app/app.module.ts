import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { LetDirective } from './ng-let.directive';
import { VarDirective } from './ng-var.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DemoComponent, LetDirective, VarDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
