/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, api, track } from 'lwc';

export default class AlertMessage extends LightningElement {
    @api alert; 
    @track success = false;
    @track danger = false;
    @track warning = false;
    @track info = false;
    @track successMessage = false;

    @api 
    set alertType(value){
        if(value === "success"){
            this.success = true
        }
        else if(value=== "danger"){
            this.danger = true;
        }
        else if(value === "warning"){
            this.warning = true;
        }
        else if(value === "info"){
            this.info = true;
        }
        else if(value === "success-message"){
            this.successMessage = true;
        }
    }

    get alertType(){
        return true;
    }

    renderedCallback(){
        const close = this.template.querySelector('.blocx-alert_close');
        close.addEventListener('click', () => {
            this.template.querySelector('.blocx-alert').style.display = 'none';
        })
        // setTimeout(()=>{
        //     this.template.querySelector('.blocx-alert').style.display = 'none';
        // },5000)
    }
 
}
