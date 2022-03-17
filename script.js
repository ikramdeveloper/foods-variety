const icons = document.querySelectorAll(".header .icons i");
let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".header .icons i.change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 3500);

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  const target = document.querySelectorAll(".target");
  target.forEach((item) => {
    item.classList.toggle("change");
  });
});
