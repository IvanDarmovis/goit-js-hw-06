const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

valueEl.value = 0;
incrementBtn.addEventListener("click", () => {
  valueEl.value += 1;
  valueEl.textContent = valueEl.value;
});
decrementBtn.addEventListener("click", () => {
  valueEl.value -= 1;
  valueEl.textContent = valueEl.value;
});
