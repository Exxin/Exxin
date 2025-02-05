'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}

// Background cuber animation
document.addEventListener('DOMContentLoaded', function () {
    var cubes = document.querySelector('.cubes');
    var speed = 40; // Швидкість анімації в секундах
  
    cubes.style.animationDuration = speed + 's';
});

    document.addEventListener('DOMContentLoaded', function() {
        const customCursor = document.getElementById('customCursor');
        const pointerCursor = document.querySelector('.pointerCursor');
        const pointerHand = document.querySelector('.pointerHand');

        document.addEventListener('mousemove', function(e) {
            customCursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        });

        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('mouseover', () => {
                pointerCursor.style.display = 'none';
                pointerHand.style.display = 'block';
            });
            element.addEventListener('mouseout', () => {
                pointerCursor.style.display = 'block';
                pointerHand.style.display = 'none';
            });
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('customCursor');
    const pointerCursor = document.querySelector('.pointerCursor');
    const pointerHand = document.querySelector('.pointerHand');
    document.addEventListener('mousemove', function(e) {
        customCursor.style.transform = `translate(${e.clientX + window.scrollX}px, ${e.clientY + window.scrollY}px)`;
    });
    document.addEventListener('scroll', function() {
        customCursor.style.transform = `translate(${e.clientX + window.scrollX}px, ${e.clientY + window.scrollY}px)`;
    });
    document.querySelectorAll('a, button, .service-card').forEach(element => {
        element.addEventListener('mouseover', () => {
            pointerCursor.style.display = 'none';
            pointerHand.style.display = 'block';
        });
        element.addEventListener('mouseout', () => {
            pointerCursor.style.display = 'block';
            pointerHand.style.display = 'none';
        });
    });
});