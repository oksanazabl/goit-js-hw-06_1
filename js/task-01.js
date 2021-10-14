const liEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEl.length}`);

const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(Element => {

  console.log(
    `Category: ${Element.firstElementChild.textContent}, Elements: ${Element.lastElementChild.children.length}`,
  );
});