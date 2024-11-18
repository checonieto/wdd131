// Update the footer dynamically
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("visible");
    hamburger.textContent = menu.classList.contains("visible") ? "X" : "☰";
});