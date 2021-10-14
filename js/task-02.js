const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemElem = document.querySelector('#ingredients')

const listElem = ingredients.forEach((ingr) => {
  const itemListElem = document.createElement('li')
  itemListElem.classList.add('item')
  itemListElem.textContent = ingr
  itemElem.appendChild(itemListElem)
})

console.log(itemElem)