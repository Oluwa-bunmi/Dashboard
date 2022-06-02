
let side = document.querySelector("aside");

document.getElementById("menu").addEventListener("click", ()=>{
    side.style.display = "block";
});
document.getElementById("closebtn").addEventListener("click", ()=> {
    side.style.display = "none";
});

const theme = document.querySelector(".toggler");
theme.addEventListener("click", ()=>{
    document.body.classList.toggle("themeVariables");
})
