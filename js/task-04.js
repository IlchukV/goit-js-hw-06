const counterRef = document.querySelector(`#counter`);
// console.log(counterRef);

const decrementBtnRef = counterRef.firstElementChild;
// console.log(decrementBtnRef);

const elCounterRef = counterRef.querySelector(`#value`);
// console.log(elCounterRef);

const incrementBtnRef = counterRef.lastElementChild
// console.log(incrementBtnRef);

let counter = 0;

decrementBtnRef.addEventListener(`click`, handleDecrementButtonClick);

function handleDecrementButtonClick() {
    console.log(`-1`);
    elCounterRef.textContent = [counter -= 1];
}

incrementBtnRef.addEventListener(`click`, handleIncrementButtonClick);

function handleIncrementButtonClick() {
    console.log(`+1`);
    elCounterRef.textContent = [counter += 1];
}

