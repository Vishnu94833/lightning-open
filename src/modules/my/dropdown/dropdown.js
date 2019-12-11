/* eslint-disable @lwc/lwc/no-document-query */
import { LightningElement, api } from 'lwc';

export default class Dropdown extends LightningElement {
    @api label;
    @api options;
    spanText;
    optionText;
    selectAllUl;
    selectDropdown;
    selectButton;
    ulElement;
    selectAllButtons;
    elementParentSpan;
    liElement;
    optionValue;
    multiSelect;
    checkImg;

    renderedCallback() {
        this.createSelect();
    }

    createSelect() {
        const select = this.template.querySelectorAll('.blocx-input-select select');

        // loop the selected selecct elements from document
        for (let select_i = 0, len = select.length; select_i < len; select_i++) {
            // Hide the by default select
            select[select_i].style.display = 'none';
            this.multiSelect = select[select_i].multiple;
            // document.getElementById(select[select_i].id)

            this.wrapElement(
                this.template.querySelectorAll('.select_id')[select_i],
                this.template.querySelector('.blocx-parent'),
                select_i,
                this.multiSelect);

            // create and assign values to options
            for (let i = 0; i < select[select_i].options.length; i++) {
                this.liElement = document.createElement('li');
                if (this.multiSelect) {
                    this.checkImg = document.createElement('img');
                    this.checkImg.className = 'blocx-option-selected';
                    this.checkImg.setAttribute('src', '../../../resources/assets/images/blocx-multiselect_icon-check-mark.svg');
                    this.liElement.appendChild(this.checkImg);

                }

                this.optionValue = select[select_i].options[i].value;

                this.optionText = document.createTextNode(select[select_i].options[i].text);

                this.liElement.className = 'blocx-select-dropdown_list-item';
                this.liElement.setAttribute('data-value', this.optionValue);
                this.liElement.appendChild(this.optionText);
                this.ulElement.appendChild(this.liElement);
                this.liElement.addEventListener('click', () => {
                    this.displyUl(this.ulElement.children[i]);
                },
                    false
                );
            }
        }

        // select the custom select buttons html document
        let buttonSelect = this.template.querySelectorAll('.blocx-select-dropdown_button');

        // add the click events to selected custom button
        for (let i = 0, len = buttonSelect.length; i < len; i++) {
            buttonSelect[i].addEventListener('click', () => {
                this.displyUl(buttonSelect[i]);
            },
                false
            );
        }
    }

    // wrap the custom select ui
    wrapElement(el, wrapper, i, multiSelect) {
        // console.log(wrapper.setAttribute('lwc:dom',"manual"));

        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        let buttonElement = document.createElement('button'),
            spanElement = document.createElement('span'),
            iElement = document.createElement('i');

        this.ulElement = document.createElement('ul');
        if (multiSelect) {
            this.spanText = document.createTextNode('');
            wrapper.className = 'blocx-select-dropdown blocx-multi-select-dropdown blocx-select-dropdown--' + i;
        } else {
            this.spanText = document.createTextNode('Select...');
            wrapper.className = 'blocx-select-dropdown blocx-select-dropdown--' + i;
        }

        buttonElement.className = 'blocx-select-dropdown_button blocx-select-dropdown_button--' + i;

        buttonElement.setAttribute('data-value', '');

        spanElement.className = 'blocx-select-dropdown blocx-select-dropdown--' + i;

        iElement.className = 'fa fa-angle-down';

        this.ulElement.className = 'blocx-select-dropdown_list blocx-select-dropdown_list--' + i;

        this.ulElement.id = 'blocx-select-dropdown_list-' + i;

        wrapper.appendChild(buttonElement);
        spanElement.appendChild(this.spanText);
        buttonElement.appendChild(spanElement);
        buttonElement.appendChild(iElement);
        wrapper.appendChild(this.ulElement);


    }


    // dispaly the custom select
    // selectButton;
    displyUl(element) {
        this.selectButton = element.parentNode.getElementsByTagName('button');
       
        if (element.tagName === 'BUTTON') {
            this.selectAllUl = this.template.querySelectorAll('.blocx-input-select ul.blocx-select-dropdown_list');
            // var selectAllButtons = element.parentNode.parentNode.getElementsByTagName('button');
            this.selectAllButtons = this.template.querySelectorAll('.blocx-input-select button.blocx-select-dropdown_button');
            this.checkOpenList(this.selectAllUl, element, 'active');
            this.checkOpenList(this.selectAllButtons, element, 'zero-bottom');

            this.selectDropdown = element.parentNode.getElementsByTagName('ul');
            for (let i = 0, len = this.selectDropdown.length; i < len; i++) {
                this.selectDropdown[0].classList.toggle('active');
                this.selectButton[0].classList.toggle('zero-bottom');
                
            }
        }
        else if (element.tagName === 'LI') {

            if (element.parentNode.parentNode.classList.contains('blocx-multi-select-dropdown')) {
                let span = document.createElement('span');
                span.setAttribute('data-value', element.getAttribute('data-value'));
                span.textContent = element.textContent;

                let selectId = element.parentNode.parentNode.querySelectorAll('select')[0];
                this.selectElement(selectId.id, element.getAttribute('data-value'));

                this.elementParentSpan = element.parentNode.parentNode.querySelectorAll('span');
                this.elementParentSpan[0].textContent.substring(9);

                if (element.classList.contains('blocx-select-dropdown_list-item-selected')) {
                    element.classList.remove('blocx-select-dropdown_list-item-selected');
                    for (let s = 0; s < this.elementParentSpan.length; s++) {
                        if (element.getAttribute('data-value') === this.elementParentSpan[s].getAttribute('data-value')) {
                            this.elementParentSpan[0].removeChild(
                                this.elementParentSpan[s]
                            );
                        }
                    }
                } else {
                    element.classList.add('blocx-select-dropdown_list-item-selected');

                    // this.elementParentSpan[0].textContent = "";
                    this.elementParentSpan[0].appendChild(span);
                    //this.elementParentSpan.append(span);
                    //   this.elementParentSpan[0].textContent = element.textContent;
                    //this.elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
                }
            } else {

                let selectId = element.parentNode.parentNode.querySelectorAll('select')[0];
                this.selectElement(selectId.id, element.getAttribute('data-value'));
                this.elementParentSpan = element.parentNode.parentNode.querySelectorAll('span');
                element.parentNode.classList.toggle('active');
                // this.selectButton[0].classList.toggle('zero-bottom');
                this.elementParentSpan[0].textContent = element.textContent;
                this.elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
            }
        }
    }


    checkOpenList(eList, el, eClass) {
        if (eList.length > 0) {
            for (let i = 0; i < eList.length; i++) {
                if (el.nextSibling !== eList[i] && eClass === 'active') {
                    eList[i].classList.remove(eClass);
                }
                if (
                    eClass === 'zero-bottom' &&
                    el.parentNode.children[1] !== eList[i]
                ) {
                    eList[i].classList.remove(eClass);
                }
            }
        }
    }

    // assgin the selected attribute to based on selection
    selectElement(id, valueToSelect) {
        let element = this.template.querySelector('.select_id');
        element.value = valueToSelect;
        element.setAttribute('selected', 'selected');
    }

}
