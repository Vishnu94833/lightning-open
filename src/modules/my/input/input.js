import { LightningElement, api } from 'lwc';
import { EventEmitter } from 'events';


export default class Input extends LightningElement{

    @api label;
    @api type;
    @api placeholder;
    @api inputStyle;
    @api valueChange = new EventEmitter();

    inputChange(event){
        this.dispatchEvent(new CustomEvent('inputhandler',{detail:event.target.value}))
        // this.valueChange.emit(event.target.value)
        // console.log(event);
        
    }

//     @Input() type: string;
//     @Input() id: string;
//     @Input() label: string;
//     @Input() inputStyle: string;
//     @Input() placeholder: string;
//     @Input() expression:boolean;
//     @Input() inputGroupAdditionClass:string;
//     @Input() iconClass:string;
//     @Input() referenceId:string;
//     @Output() valueChange = new EventEmitter();
//     constructor() { }
//     valueChanged(inputName) { // You can give any function name
//       console.log(inputName);
//       this.valueChange.emit(inputName.value);
//   }
//     ngOnInit() {
//     }
  

}