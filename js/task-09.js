
const refs = {
  button: document.querySelector(`.change-color`),
  text: document.querySelector(`.color`)
    }
refs.button.addEventListener(`click`, onClickButtonChangeColor);

// функція, яка генерує рандомний колір
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function onClickButtonChangeColor() {
  //задаємо body інлайн стиль
  document.body.style.backgroundColor = getRandomHexColor();
  // виводимо в span номер кольору
  refs.text.textContent = getRandomHexColor();
}

  
  
