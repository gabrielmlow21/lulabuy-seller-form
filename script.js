// form steps
const stepOne = document.querySelector('.form__step-1');
const stepTwo = document.querySelector('.form__step-2');
const stepThree = document.querySelector('.form__step-3');

// button elements
const nextButton = document.querySelector('.button-next');
const submitButton = document.querySelector('.button-submit');

nextButton.addEventListener("click", function(event) {
    event.preventDefault();
    stepTwo.classList.add('active');
    stepOne.classList.remove('active');
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    stepThree.classList.add('active');
    stepTwo.classList.remove('active');
});