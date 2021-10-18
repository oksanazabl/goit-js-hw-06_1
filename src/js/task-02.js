'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemElem = document.querySelector('#ingredients');

const listElem = ingredients.map(ingr => {
  const itemListElem = document.createElement('li');
  
  itemListElem.textContent = ingr;
  
  return itemListElem;
})
itemElem.append(...itemListElem);

console.log(itemElem);