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
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

});


// Fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="warning">${order.shipping}</td>
                            <td class="primary">Details</td>
                            `;
                             
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);                        
})