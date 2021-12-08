
const categoriesNumberEll = document.querySelector('#categories').children;
console.log(`Number of categories: ${categoriesNumberEll.length}`);

const categoriesList = document.querySelectorAll('.item');

categoriesList.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});