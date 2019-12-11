import { LightningElement, api } from 'lwc';

export default class ProgressStep extends LightningElement {
    @api steps;
    @api stepValue;

    renderedCallback() {
        const step = this.template.querySelectorAll('.blocx-progress_step');
        // step[this.stepValue].style.backgroundImage = "url(../../resources/assets/images/blocx-card_icon-avatar-img.svg)"
        step[this.stepValue].classList.add('is-active');
        // let btn = this.template.querySelector('button');
        // btn.addEventListener('click', () => {
            // if (this.stepValue !== step.length - 1) {
                
            //     step[this.stepValue].classList.remove('is-active');
            //     this.stepValue += 1;
            //     step[this.stepValue].classList.add('is-active');
            //  }
        // });
    }

    handleChange(){
        this.dispatchEvent(new CustomEvent('next'));
    }
}
