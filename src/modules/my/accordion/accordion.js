/* eslint-disable @lwc/lwc/no-document-query */
import { LightningElement, api } from 'lwc';

export default class Accordion extends LightningElement {
    @api accordions;

    // Accordion js 
    renderedCallback() {
        // get the accordion heading class
        const accHD = this.template.querySelectorAll('.blocx-accordion_heading');
        // get the accordion item class
        const accItem = this.template.querySelectorAll('.blocx-accordion'); 

        this.accordionFirstItemOpen(accItem);

        for (let i = 0; i < accHD.length; i++) {
            accHD[i].addEventListener('click', () => {

                let itemClass = accHD[i].parentNode.className;
                for (let j = 0; j < accItem.length; j++) {
                    accItem[j].className = 'blocx-accordion close';
                }
                if (itemClass === 'blocx-accordion close') {
                    accHD[i].parentNode.className = 'blocx-accordion open';
                }
            }, false);
        }
    }

    // FIRST ITEM OPEN BY DEFAULT
    accordionFirstItemOpen(accItem) {
        for (let i = 0; i < accItem.length; i++) {
            if (i === 0) {
                accItem[i].classList.add('open');
            }
            else {
                accItem[i].classList.add('close');
                accItem[i].classList.add('close');
            }
        }
    }
}
