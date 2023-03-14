const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener(`input`, onInputBlur);

function onInputBlur() {
    const dataLength = inputRef.getAttribute("data-length");
    const inputLength = inputRef.value.length;
    
if (
inputLength < dataLength ||
inputLength > dataLength
) {
inputRef.classList.add("invalid");
} else {
inputRef.classList.remove("invalid");
inputRef.classList.add("valid");
}
}