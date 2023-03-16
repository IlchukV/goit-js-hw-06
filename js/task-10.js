const refs = {
 input: document.querySelector("[type='number']"),
 btnCreate: document.querySelector("[data-create]"),
 btnDestroy: document.querySelector("[data-destroy]"),
 boxesEl: document.getElementById('#boxes')
}

refs.btnCreate.addEventListener(`click`, onCreateBoxes());

refs.btnDestroy.addEventListener(`click`, onDestroyBoxes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


onCreateBoxes(amount) {
  for (i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}`;
    box.style.height = `${30 + 10 * i}`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.appendChild(box)
  }
};

onDestroyBoxes() {
  refs.boxesEl.remove(refs.boxesEl.firstChaild);  
};

