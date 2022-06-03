let side = document.querySelector("aside");

document.getElementById("menu").addEventListener("click", () => {
  side.style.display = "block";
});
document.getElementById("closebtn").addEventListener("click", () => {
  side.style.display = "none";
});

/* ------theme ------ */
let themeToggler = document.querySelector(".toggler");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("themeVariables");
});
