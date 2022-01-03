const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  }
  console.log(typeof inputEl.dataset.length);
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  }
});

inputEl.addEventListener("focus", () => {
  inputEl.classList.remove("valid", "invalid");
});
