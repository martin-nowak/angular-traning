import { Component } from '@angular/core';
import { Locals } from './locals';


@Component({
  selector: 'my-app',
  template: `


    <!-- ---- Lange schreibweise ngModel -->
    <input type="text" [ngModel]="blogPost.title" (ngModelChange)="blogPost.title = $event" />
    <!-- ---- Kurze schreibweise ngModel -->
    <input type="text" [(ngModel)]="blogPost.title" />
    <input type="checkbox" [(ngModel)]="blogPost.title" />
    <p>{{ blogPost.title }}</p>



    <my-select 
      [options]="options"  
      [(model)]="selectedLand" >
    </my-select>


    <my-select 
      [options]="options"  
      [model]="selectedLand"
      (modelChange)="selectedLand = $event" >
    </my-select>

    <p>{{ selectedLand }}</p>




   <!--  <my-select [options]="options" (onChange)="onChangeOption($event)"></my-select> -->

<!--
    <div *ngFor="let card of cards">
        <my-card title="{{card.title}}" [date]="card.date"></my-card>
    </div> 
    <input type="text" (keyup)="onInputKeyUp()" />
    <my-timer [duration]="timerDuration" (finish)="onTimerFinish()"></my-timer>
-->
  <!-- 
  <div>
      <button (click)="onAddLocal();">Land hinzufügen</button>
      <ul>
        <li *ngFor="let local of locals; let i = index">
          {{i}}:{{local.firstname}}{{local.lastname}}
          <button (click)="onDeleteLocal(i);">Delete</button>
        </li>
      </ul>
      <div>
        <input type="text" (keyup)="onKeyEnter($event.target.value)" />
        <p *ngIf="inputValue != '' ">Das habe ich getippt {{inputValue}}</p>
      </div>
      <div>
        <button *ngIf="!counterRunning" (click)="onStartCounter()">Start!</button>
          <p>{{currentTime}}</p>
        <button *ngIf="counterRunning" (click)="onStopCounter()">Stop</button>
      </div>
  </div>
  -->
  `,
})
export class AppComponent  { 

/**
 * 
 * Two Data-Bindings
 */

blogPost =  {
  title: "Hallo World!"
};





/**
 * SelectComponent
 */


  selectedLand = "Deutschland";

  options=[
    "Deutschland",
    "Spanien",
    "Polen"
  ];

  onChangeOption(country:String){
    console.log(country);
  }



/**
 * TimerComponent
 */

  timerDuration = 10;
  onInputKeyUp(){}
  onTimerFinish(){
    this.timerDuration = 10;
  }






  /**
   * CardComponent
   */
          cards = [
            {
                title: "Angular ist toll",
                date: new Date(2016, 12, 6)
            },
            {
                title: "Javascript auch!",
                date: new Date(2016, 12, 6)
            }
        ]










    /**
     * AppComponent
     */
     counterRunning = false;
     currentTime = 0;
     counterInterval:any;
    
    onStopCounter(){
      this.counterRunning = false;
      clearInterval(this.counterInterval);

    };

    onStartCounter()
    {
      
      this.counterRunning = true;

      this.counterInterval = setInterval(()=> {
        this.currentTime = this.currentTime + 0.1;
      }, 100);
      console.log(this.counterInterval);
    }

    /**
     * Um den Code Clean zu halten, für IOS und Android lieber die Typ-Angaben nicht verwenden
     * falsch:
     *    onKeyEnter(event:KeyboardEvent){
     *        this.inputValue = (<HTMLInputElement> event.target).value;
     *    }
     * 
     * richtig:
     *    onKeyEnter(inputValue:string){
     *        this.inputValue = inputValue;
     *    }
     *   
     */
    inputValue:string = "";

    onKeyEnter(inputValue:string){
      this.inputValue = inputValue;
    }

    /**
     * Click Event - fügt neue Länder zur einer Liste oder enfernt die 
     */
  locals = [
    new Locals("Europa", "Deutschland"),
    new Locals("Asien", "China"),
    new Locals("Afrika", "Kamerun")
  ];
  onDeleteLocal(index:number){
    this.locals.splice(index,1);
  }
  onAddLocal(){
      this.locals.push(        
          new Locals("Nordamerika", "USA")
      );
  };

}
