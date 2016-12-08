import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-select',
    template: `
        <!-- Single button -->
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" 
                (click)="dropDownOpen = !dropDownOpen">

                 <!-- {{ buttonLabel }} <span class="caret"></span> -->

                {{ model }} <span class="caret"></span>


            </button>
            <ul class="dropdown-menu" style="display:block;" *ngIf="dropDownOpen">
                <li *ngFor="let option of options">
                    <a (click)="onClickOption(option)">{{ option }}</a>
                </li>
            </ul>
        </div>
    
    `

})


export class SelectComponent{

        dropDownOpen:boolean = false;

        buttonLabel:String = 'Bitte wählen';    
        @Input() options:String[];
        @Output() onChange = new EventEmitter();

        @Input() model:String;
        @Output() modelChange = new EventEmitter();

        onClickOption(clickOption:String){
            //this.buttonLabel = clickOption;
            this.model = clickOption;
            this.dropDownOpen = false;
            //this.onChange.emit(clickOption);
            this.modelChange.emit(clickOption);
        }
}