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
        btnReq.style.backgroundColor = "#F4C3BD"
        reqLista.style.display = "none"
        defLista.style.display = "none"
    } else {
        btnReq.style.backgroundColor = "#9A5071"
        btnDef.style.backgroundColor = "#F4C3BD"
        defLista.style.display = "none"
        reqLista.style.display = "flex"
    }
})
btnDef.addEventListener("click", function () {
    if (defLista.style.display === "flex") {
        btnDef.style.backgroundColor = "#F4C3BD"
        defLista.style.display = "none"
        reqLista.style.display = "none"
    } else {
        btnDef.style.backgroundColor = "#9A5071"
        btnReq.style.backgroundColor = "#F4C3BD"
        reqLista.style.display = "none"
        defLista.style.display = "flex"
    }
})
