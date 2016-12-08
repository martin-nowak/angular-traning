import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CardComponent }  from './card.component';
import { TimerComponent }  from './timer.component';
import { SelectComponent }  from './select.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    CardComponent,
    TimerComponent,
    SelectComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
