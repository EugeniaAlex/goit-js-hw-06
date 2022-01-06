function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEll = document.querySelector('input');
const createButtonEll = document.querySelector('button[data-create]');
const destroyButtonEll = document.querySelector('button[data-destroy]');
const boxesDivEll = document.querySelector('#boxes');

createButtonEll.addEventListener('click', insertBoxesOnButtonClick);
destroyButtonEll.addEventListener('click', destroyBoxesOnButtonClick);

function CreateBoxesOnButtonClick() {
  const numberOfBoxes = Number(inputEll.value);
  console.log(numberOfBoxes);
  const boxElements = [];

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const boxWidth = 30 + 10 * i;
    const boxHeight = 30 + 10 * i;
    const boxBackground = getRandomHexColor();

    const boxEll = document.createElement('div');
    
    boxEll.style.width = `${boxWidth}px`;
    boxEll.style.height = `${boxHeight}px`;
    boxEll.style.background = boxBackground;

    boxElements.push(boxEll);
    console.log(boxElements[i]);
  };

  console.log(boxElements);
  return boxElements;
};

function insertBoxesOnButtonClick() {
  const boxes = CreateBoxesOnButtonClick();
  boxesDivEll.append(...boxes);

 };

function destroyBoxesOnButtonClick() {
  const boxesToDelete = Array.from(boxesDivEll.children);
  console.log(boxesToDelete);

  for (const box of boxesToDelete) {
    box.remove();
   };

 };