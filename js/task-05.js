//виносимо всі посилання в один об'єкт
const refs = {
    input: document.querySelector(`#name-input`),
    namelabel: document.querySelector(`#name-output`),
}

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
   
    (event.currentTarget.value.trim() !== ``) ? refs.namelabel.textContent = event.currentTarget.value : refs.namelabel.textContent = `Anonymous`;
    console.log(refs.namelabel.textContent);
   
}
