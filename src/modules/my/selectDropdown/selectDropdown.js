import { LightningElement, api } from 'lwc';

export default class SelectDropdown extends LightningElement {
    @api label;
    @api options;
    @api placeholder;
    options = [{
        id: 1,
        value: 'Option1',
        label: 'Option1'
    },
    {
        id: 2,
        value: 'Option2',
        label: 'Option2'
    },
    {
        id: 3,
        value: 'Option3',
        label: 'Option3'
    },
    {
        id: 4,
        value: 'Option4',
        label: 'Option4'
    }
    ]

    selectChange(event){
        this.dispatchEvent(new CustomEvent('selectchange',{detail:event.target.value}))
    }

}
