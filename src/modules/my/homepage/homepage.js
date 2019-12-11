import { LightningElement, track } from 'lwc';

export default class Homepage extends LightningElement {
    @track value = 0;
    isFirstCard = false;
    isFirstPage = true;
    isSecondPage = false;
    isThirdPage = false;
    isFourthPage = false;
    cityOptions;
    slides = [
        {
            id: 1,
            background:
                '../../../resources/assets/docAppointment/carousel1.jpg',
            title: '',
            subtitle1: '',
            subtitle2: ''
        },
        {
            id: 2,
            background:
                '../../../resources/assets/docAppointment/carousel3.jpg',
            title: '',
            subtitle1: '',
            subtitle2: ''
        },
        {
            id: 3,
            background:
                '../../../resources/assets/docAppointment/carousel10.jpg',
            title: '',
            subtitle1: '',
            subtitle2: ''
        }
    ];
    stateOptions = [{
        id: 1,
        value: 'Karnataka',
        label: 'Karnataka'
    },
    {
        id: 2,
        value: 'Maharashtra',
        label: 'Maharashtra'
    },
    {
        id: 3,
        value: 'Tamil Nadu',
        label: 'Tamil Nadu'
    }
    ]
    @track cities = [
        {
            id:1,
            code: "Karnataka",
            label: "Bangalore",
            value: "Bangalore"
        },
        {id:2,
            code: "Karnataka",
            label: "Mysore",
            value: "Mysore"
        },
        {id:3,
            code: "Karnataka",
            label: "Hubli",
            value: "Hubli"
        }, {id:4,
            code: "Maharashtra",
            label: "Mumbai",
            value: "Mumbai"
        },
        {id:5,
            code: "Maharashtra",
            label: "Pune",
            value: "Pune"
        },
        {id:6,
            code: "Maharashtra",
            label: "Nagpur",
            value: "Nagpur"
        }, {id:7,
            code: "Tamil Nadu",
            label: "Chennai",
            value: "Chennai"
        },
        {id:8,
            code: "Tamil Nadu",
            label: "Coimbatore",
            value: "Coimbatore"
        },
        {id:9,
            code: "Tamil Nadu",
            label: "Madurai",
            value: "Madurai"
        }];
    speciaists = [
            {
                label: "Cardiologist",
                value: "Cardiologist"
            },
            {
                label: "Ophthamology",
                value: "Ophthamology"
            },
            {
                label: "Pediatrics",
                value: "Pediatrics"
            }
    ];
    hospital = [{
            label:"Apollo Hospital",
            value:"Apollo Hospital"
    }]

    Value(){
        this.isFirstCard = true;
    }


    sencondPage(){
        this.isFirstPage = false;
        this.isSecondPage = true;
    }
    showThirdPage(){
        this.isFirstPage = false;
        this.isSecondPage = false;
        this.isThirdPage = true ;
    }
    showFourthPage(){
        this.isFirstPage = false;
        this.isSecondPage = false;
        this.isThirdPage = false ;
        this.isFourthPage = true;
    }
    selectedValue(event){
        this.value = event.target.value;
        console.log(this.value);
        
    }
    stateChange(event){
        // console.log(event.detail);
        let currentState = event.detail;
        this.cityOptions = this.bindCities(currentState)
    }
    bindCities(currentState) {
        var cityList = [];
        this.cities.forEach(function (item) {
            if (currentState.toUpperCase() === (item.code.toUpperCase())) {
                cityList.push(item);
            }
        });
        return cityList
    }

    cityChange(event){
        console.log(event.detail);
    }
}
