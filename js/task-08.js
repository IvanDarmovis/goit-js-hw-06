const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля!");
  } else {
    return console.log({
      email: email.value,
      password: password.value,
    });
  }
}
