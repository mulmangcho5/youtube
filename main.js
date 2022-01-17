const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

const clickBlue = document.querySelector(".actions li .fa-thumbs-up");

clickBlue.addEventListener("click", () => {
  clickBlue.classList.toggle("active");
});
