function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEll = document.querySelector('.change-color');
const spanEll = document.querySelector('.color');
const body = document.body;

buttonEll.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() { 
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  spanEll.textContent = currentColor;
};
