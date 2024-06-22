const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
