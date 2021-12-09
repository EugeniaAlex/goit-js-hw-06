const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEll = document.querySelector('#ingredients');


const createIngredientsListItems = ingredientsArr => {
  return ingredientsArr.map(ingredient => {
  const ingredientEll = document.createElement('li');
  ingredientEll.textContent = ingredient;
  ingredientEll.classList.add("item");
  return ingredientEll;
});
};

const ingredientsListItems = createIngredientsListItems(ingredients);

ingredientsListEll.append(...ingredientsListItems);