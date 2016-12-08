import { Component, Input, Output, EventEmitter } from '@angular/core';

var e = new EventEmitter();
console.log(e);






@Component({
    selector:   'my-timer',
    template:   `
        <div style="border: 1px solid #efefef;">
            TimerComponent: {{duration}}
        </div>
    `
})

export class TimerComponent{
        
        @Input() duration:number;
        @Output() finish = new EventEmitter();

        constructor(){

            setInterval(()=>{
                this.duration = this.duration - 1;
                if(this.duration === 0){
                    this.finish.emit();
                }
            }, 1000);
        }
    


}