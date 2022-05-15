const btnsVagas = document.querySelectorAll('.btn-vaga')

btnsVagas.forEach(el =>{
    el.addEventListener("click", function(){
        localStorage.setItem('vaga', el.id);
    })
})

let vaga = localStorage.getItem('vaga');

