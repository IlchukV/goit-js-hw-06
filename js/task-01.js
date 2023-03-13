//Рахуємо  кількість категорій в ul#categories, тобто елементів li.item.

const categoriesRef = document.querySelector('#categories');

console.log("Number of categories:", categoriesRef.children.length)

// Для кожного элемента li.item у списку ul#categories знаходимо текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const itemRef = categoriesRef.querySelectorAll('.item');

//Перебираємо всі елементи з класом .item

itemRef.forEach((el) => {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.lastElementChild.children.length);
})

