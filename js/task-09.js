function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

colorBtn.addEventListener("click", onColorBtnClick);

function onColorBtnClick() {
  const color = getRandomHexColor();

  textEl.textContent = color;
  document.body.style.backgroundColor = color;
}
