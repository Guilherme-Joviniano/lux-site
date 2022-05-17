const btnNav = document.querySelector(".menu-burguer-container")
const navbar = document.querySelector('nav')
const navbarCarreiras = document.querySelector('.navbar-carrers')
const btnCurriculo = document.querySelector(".btn-curriculo")




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


btnCurriculo.addEventListener('click', function(){
    
    window.location.href = "mailto:?subject=Subject&body=" + message;
})
