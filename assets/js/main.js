const btnNav = document.querySelector(".menu-burguer-container")
const navbar = document.querySelector('nav')
const navbarCarreiras = document.querySelector('.navbar-carrers')
const btnCurriculo = document.querySelector(".btn-curriculo")

const btnReq = document.querySelector(".btn-req")
const btnDef = document.querySelector(".btn-des")

const reqLista = document.querySelector(".info-req")
const defLista = document.querySelector(".info-def")


console.log(defLista);
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


btnCurriculo.addEventListener('click', function () {
    window.location.href = "mailto:?subject=Subject&body=" + message;
})


console.log(btnDef, defLista);

btnReq.addEventListener("click", function () {
    if (reqLista.style.display === "flex") {
        reqLista.style.display = "none"
        defLista.style.display = "none"
    } else {
        defLista.style.display = "none"
        reqLista.style.display = "flex"
    }
})
btnDef.addEventListener("click", function () {
    if (defLista.style.display === "flex") {
        defLista.style.display = "none"
        reqLista.style.display = "none"
    } else {
        reqLista.style.display = "none"
        defLista.style.display = "flex"
    }
})
