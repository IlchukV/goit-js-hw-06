//виносимо всі посилання в один об'єкт
const refs = {
    input: document.querySelector(`#name-input`),
    namelabel: document.querySelector(`#name-output`),
}

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
   
    (event.currentTarget.value != ``) ? refs.namelabel.textContent = event.currentTarget.value : refs.namelabel.textContent = `Anonymous`;
    console.log(refs.namelabel.textContent);
   
}


//слухач на фокус
// refs.input.addEventListener(`focus`, onInputFocus);

// //слухач на НЕ фокус
// refs.input.addEventListener(`blur`, onInputBlur);

// function onInputFocus() {
//     console.log(`фокус`);
// };
// function onInputBlur() {
//     console.log(`блюр`);
// };