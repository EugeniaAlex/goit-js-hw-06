const inputEll = document.querySelector('#font-size-control');
const spanEll = document.querySelector('#text');

inputEll.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    spanEll.style.fontSize = event.currentTarget.value + "px";
 };