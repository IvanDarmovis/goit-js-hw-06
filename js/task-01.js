"use strict";

const item = document.querySelectorAll(".item");
console.log("Number of categories: ", item.length);

item.forEach((li) => {
  const heading = li.querySelector("h2");
  console.log("Category: ", heading.textContent);

  console.log("Elements: ", li.querySelectorAll("li").length);
});
