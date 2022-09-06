const sideNav = document.querySelector(".side-nav")
const overlay = document.querySelector(".overlay")
const ham = document.querySelector(".hamburg-btn")
const menuX = document.querySelector(".menu")
const menuItems = document.querySelectorAll(".nav-link")

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHamburger)
})

ham.addEventListener("click", toggleHamburger)
menuX.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
    overlay.classList.toggle("show-overlay")
    sideNav.classList.toggle("show-nav")
}


