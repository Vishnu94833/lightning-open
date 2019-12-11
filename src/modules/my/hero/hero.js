/* eslint-disable @lwc/lwc/no-document-query */
import { LightningElement, api } from 'lwc';

export default class Hero extends LightningElement {
    slideIndex = 0;
    currentSlideIndex = 0;
    @api slideArray ;

    renderedCallback() {
        this.buildSlider();
    }

    buildSlider() {
        let heroHTML;
        for (let i = 0; i < this.slideArray.length; i++) {
            heroHTML +=
                "<div class='blocx-slider_block' style='background-image:url(" +
                this.slideArray[i].background +
                ");'>" +
                "<div class='blocx-slider_block_content' '>" +
                "<h1 class='blocx-slider_heading'>" +
                this.slideArray[i].title +
                '</h1>' +
                "<div class='blocx-slider_subheading'>" +
                "<h4 class='blocx-margin-right-10'>" +
                this.slideArray[i].subtitle1 +
                '</h4>' +
                '<h4>' +
                this.slideArray[i].subtitle2 +
                '</h4>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }

        // eslint-disable-next-line @lwc/lwc/no-inner-html
        this.template.querySelector('.heroSlider').innerHTML = heroHTML;

        this.template.querySelectorAll('.blocx-slider_block')[0].style.left = 0;
    }

    prevSlide() {
        let nextSlideIndex;
        if (this.currentSlideIndex === 0) {
            nextSlideIndex = this.slideArray.length - 1;
        } else {
            nextSlideIndex = this.currentSlideIndex - 1;
        }

        this.template.querySelectorAll('.blocx-slider_block')[nextSlideIndex].style.left = '-100%';
        this.template.querySelectorAll('.blocx-slider_block')[this.currentSlideIndex].style.left = 0;

        this.template.querySelectorAll('.blocx-slider_block')[nextSlideIndex].setAttribute('class', 'blocx-slider_block slideInLeft');
        this.template.querySelectorAll('.blocx-slider_block')[this.currentSlideIndex].setAttribute('class', 'blocx-slider_block slideOutRight');

        this.currentSlideIndex = nextSlideIndex;
    }

    nextSlide() {
        let nextSlideIndex;
        if (this.currentSlideIndex === this.slideArray.length - 1) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = this.currentSlideIndex + 1;
        }

        this.template.querySelectorAll('.blocx-slider_block')[nextSlideIndex].style.left = '100%';
        this.template.querySelectorAll('.blocx-slider_block')[this.currentSlideIndex].style.left = 0;

        this.template.querySelectorAll('.blocx-slider_block')[nextSlideIndex].setAttribute('class', 'blocx-slider_block slideInRight');
        this.template.querySelectorAll('.blocx-slider_block')[this.currentSlideIndex].setAttribute('class', 'blocx-slider_block slideOutLeft');
        this.currentSlideIndex = nextSlideIndex;
    }
}
