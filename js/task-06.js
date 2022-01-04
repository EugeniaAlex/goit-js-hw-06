const inputEll = document.querySelector('#validation-input');

inputEll.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (Number(event.currentTarget.dataset.length) === event.currentTarget.value.length) {

        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');

    }
    else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid')  
    }
 };