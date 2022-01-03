const inputEll = document.querySelector('#name-input');
const spanEll = document.querySelector('#name-output');

inputEll.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if (event.currentTarget.value !== "") { 
         
        spanEll.textContent = event.currentTarget.value;
        
    }
    else {
        spanEll.textContent = "Anonymous";
    }   
};

