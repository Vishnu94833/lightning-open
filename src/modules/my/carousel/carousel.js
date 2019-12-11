import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
    @api carouselDetails;
    renderedCallback() {
        // Carousel previous click
        const prev = this.template.querySelector('.prev-btn');
        const next = this.template.querySelector('.next-btn');
        let index = 0;
        const lis = this.template.querySelectorAll('.blocx-carousel_inner .blocx-carousel_item');
        const lis1 = this.template.querySelectorAll('.blocx-carousel_controls a');
        const indicator = this.template.querySelectorAll('a')
        let count = lis.length;

        lis[0].classList.add('active');
        indicator[0].classList.add('active')
        // Acitve carousel index value 
        let _getIndexVal = function () {
            for (let i = 0; i < count; i++) {
                if (lis[i].classList.contains('active')) {
                    index = i;
                }
            }
        }

        prev.addEventListener('click', () => {
            _getIndexVal();
            console.log("prev");
            lis[index].classList.remove('active');
            lis1[index].classList.remove('active');
            index--;
            if (index < 0) {
                index = count - 1;
            }
            lis[index].classList.add('active');
            lis1[index].classList.add('active');
        });

        // Carousel next click
        next.addEventListener('click', () => {
            _getIndexVal();
            console.log("next");
            lis[index].classList.remove('active');
            lis1[index].classList.remove('active');
            index++;
            if (index > count - 1) {
                index = 0;
            }
            lis[index].classList.add('active');
            lis1[index].classList.add('active');
        });

  
    }
    // Carousel indicator click
    //  showCurrentCarousel(event,lis,lis1){
    //     // event.preventDefault();
    //     console.log(lis,lis1);
        
    //     for(let i = 0; i < lis.length; i++){
    //         lis[i].classList.remove('active');
    //         lis1[i].classList.remove('active');
    //     }
    //     lis[event].classList.add('active');
    //     lis1[event].classList.add('active');
    // }
}
