import { LightningElement } from 'lwc';
import { Service } from './service';

export default class App extends LightningElement {
    slides = [{
        id: "slide0",
        title: "TITLE-1",
        subtitle1: "SUB-TITLE-1",
        subtitle2: "SUB-TITLE-TWO-1",
        background: "../../../resources/assets/images/blocx-heroslider_img-mountains.png"
    }
        ,
    {
        id: "slide1",
        title: "TITLE-2",
        subtitle1: "SUB-TITLE-2",
        subtitle2: "SUB-TITLE-TWO-2",
        background: "../../../resources/assets/images/blocx-heroslider_img-mountains.png"
    }
        ,
    {
        id: "slide2",
        title: "TITLE-3",
        subtitle1: "SUB-TITLE-3",
        subtitle2: "SUB-TITLE-TWO-3",
        background: "../../../resources/assets/images/blocx-heroslider_img-mountains.png"
    }

    ]

    accordion = [
        {
            id: 0,
            Title: "Accordion Heading",
            Content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. `
        },
        {
            id: 1,
            Title: "Accordion Heading",
            Content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. `
        },
        {
            id: 2,
            Title: "Accordion Heading",
            Content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. `
        }

    ]

    carousel = [{
        id: 1,
        indicator: 1,
        image: "../../../resources/assets/images/blocx-carousel_img-1.jpg",
        Title: "Title-1",
        Description: "Body Of Title One"
    },
    {
        id: 2,
        indicator: 2,
        image: "../../../resources/assets/images/blocx-carousel_img-2.jpg",
        Title: "Title-2",
        Description: "Body Of Title Two"
    },
    {
        id: 3,
        indicator: 3,
        image: "../../../resources/assets/images/blocx-carousel_img-3.jpg",
        Title: "Title-3",
        Description: "Body Of Title Three"
    },
    {
        id: 4,
        indicator: 4,
        image: "../../../resources/assets/images/blocx-carousel_img-4.png",
        Title: "Title-4",
        Description: "Body Of Title Three"
    }]

    slides = [
        {
            id: 1,
            background:
                '../../../resources/assets/images/blocx-heroslider_img-mountains.png',
            title: 'Title One ****',
            subtitle1: 'Subtitle ******** Subtitle 2222',
            subtitle2: 'subtitle.....3333'
        },
        {
            id: 2,
            background:
                '../../../resources/assets/images/blocx-heroslider_img-mountains.png',
            title: 'Automobile Industries',
            subtitle1: 'Maruti Suzuki',
            subtitle2: 'Swift,Baleno'
        },
        {
            id: 3,
            background:
                '../../../resources/assets/images/blocx-heroslider_img-mountains.png',
            title: 'Electronic Industries',
            subtitle1: 'Samsung',
            subtitle2: 'Samsung A80'
        }
    ];

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

    x(x) {
        // const d = new Service()
        const list = new Array();
        x.forEach(element => {
            list.push(new Service(element.id, element.value, element.label))
        });
        return list
    }

    renderedCallback() {

    }

    change(event){
        console.log(event.detail);

    }

}
