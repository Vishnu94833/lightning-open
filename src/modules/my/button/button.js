import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api btnclass="blocx-button";
    @api label;
    @api type;
    @api isdisable;
}
