const checkBox = document.getElementById("themeBtn");
const boll = document.querySelector(".theme-btn .boll");

checkBox.addEventListener("click", () => {
  boll.classList.toggle("checked");
  document.body.classList.toggle("dark");
});

// include type //
const cardTypes = document.querySelectorAll(".cards .card .nums .type .image");
const cardTypesArr = Array.from(cardTypes);
const cardTypeImage = document.querySelector(".cards .card .nums .type .image");
// const cardTypeImageData = cardTypeImages.getAttribute("data-type");

// console.log(cardTypeImages.getAttribute("data-type"));
// console.log(cardTypesArr);

/*
cardTypes.forEach((cardType) => {
  console.log(cardType.getAttribute("data-type"));
  if ((cardType.dataset.type = "chiken")) {
    cardTypeImage.innerHTML = `
    <img src="./icons/type-icon/chicken.png" alt="" />
    `;
  } else if ((cardType.dataset.type = "meat")) {
    cardTypeImage.innerHTML = `
    <img src="./icons/type-icon/meat.png" alt="" />
    `;
  } else if ((cardType.dataset.type = "veg")) {
    cardTypeImage.innerHTML = `
    <img src="./icons/type-icon/salad.png" alt="" />
    `;
  }
});
*/

// Nav Active //
const bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  bar.classList.toggle("active");
});
