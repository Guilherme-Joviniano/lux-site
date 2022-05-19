const btnNav = document.querySelector(".menu-burguer-container")
const navbar = document.querySelector('nav')
const navbarCarreiras = document.querySelector('.navbar-carrers')


const reqLista = document.querySelector(".info-req")
const defLista = document.querySelector(".info-def")


btnNav.addEventListener("click", function () {
    if (navbarCarreiras != null) {
        if (navbarCarreiras.style.display == "flex") {
            btnNav.classList.remove('close')
            navbarCarreiras.style.display = 'none'
        } else {
            btnNav.classList.add('close')
            navbarCarreiras.style.display = 'flex'
        }
    } else {
        if (navbar.style.display == "flex") {
            btnNav.classList.remove('close')
            navbar.style.display = 'none'
        } else {
            btnNav.classList.add('close')
            navbar.style.display = 'flex'
        }
    }
})




