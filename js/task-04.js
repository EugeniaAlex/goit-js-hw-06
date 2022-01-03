const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');

let spanValue = Number(spanEl.textContent);
console.log(spanValue); 

decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    spanValue -= 1;
    spanEl.textContent = spanValue;
    console.log(spanValue);
};
 
function onIncrementButtonClick() {
    spanValue += 1;
    spanEl.textContent = spanValue;
    console.log(spanValue);
 };
