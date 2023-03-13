const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// знаходимо наш тег ul по ідентифікатору #ingredients
const ingredientsRef = document.querySelector('#ingredients');

// перебираємо вхідний масив через map, при цьому в новому масиві створюємо для кожного елементу тег li, клас item, і вставляємо текст
const ingredientsArr = ingredients.map((el) => {
const itemRef = document.createElement(`li`);
itemRef.classList.add(`item`);
itemRef.textContent = el;
  
return itemRef
})
 
//"розпилюємо" отриманий масив елементів ingredientsArr в вказане місце ingredientsRef документа
ingredientsRef.append(...ingredientsArr)
console.log(ingredientsArr);