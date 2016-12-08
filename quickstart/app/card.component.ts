import { Component, Input } from '@angular/core';

@Component({

    selector:   'my-card',
    template:   `
        <div style="border: 1px solid #efefef;">
            {{ title }}
            {{ date.getFullYear() }}
        </div>
    `
})

export class CardComponent{
        
        @Input() title:String;
        @Input() date:Date;



    


}