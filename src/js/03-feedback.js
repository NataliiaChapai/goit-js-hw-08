import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
let formData = {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));
populateForm();

function onTextAreaInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

function onFormSubmit(event) {
    event.preventDefault();
    if (formRef.email.value === '' || formRef.message.value === '') {
        alert('Please note that all fields are required!');
        } else {
        console.log(formData);
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
        formData = {};
    }
}

function populateForm() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'))
   
    for (const key in savedData) {
        if (key) {
            formRef[key].value = savedData[key]
            formData = savedData;
        } 
    }
}
