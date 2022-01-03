const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const tagList = ingredients.map((ingredient) => {
  const tag = document.createElement("li");
  tag.textContent = ingredient;
  tag.classList.add("item");
  return tag;
});

listEl.append(...tagList);
