function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputValueEl = document.querySelector("#controls input");

function createBoxes(amount) {
  let arr = [];

  for (let i = 0; i < amount; i += 1) {
    const k = i * 10 + 30;
    const el = document.createElement("div");
    el.style.width = `${k}px`;
    el.style.height = `${k}px`;
    el.style.backgroundColor = getRandomHexColor();

    // то можна закоментувати. всеодно працюватиме
    el.style.position = "absolute";
    el.style.zIndex = amount - i;
    el.style.left = `${(amount - i) * 5 + 20}px`;
    el.style.top = `${(amount - i) * 5 + 150}px`;

    arr.push(el);
  }
  divBoxEl.append(...arr);
}

destroyBtn.addEventListener("click", () => {
  divBoxEl.innerHTML = "";
});

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputValueEl.value));
});
