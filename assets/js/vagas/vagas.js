function Vagas(requisitos, desafios, area, name) {
    this.area = area;
    this.name = name;
    this.requisitos = requisitos;
    this.desafios = desafios;

    return this.criarElemento();
}

Vagas.prototype.criarElemento = function () {
    const area = document.querySelector(".area-atuacao")
    area.innerHTML = `<h1>${this.area}</h1>`
    const name = document.querySelector(".vaga-name")
    name.innerHTML = `<h2>${this.name}</h2>`

    const listaDesafios = document.querySelector(".desafios-lista")
    const listaRequisitos = document.querySelector(".requisito-lista")

    this.desafios.forEach(el => {
        let child = document.createElement("li")
        child.classList.add("item-desafio")
        child.innerHTML = el
        listaDesafios.append(child)
    });

    this.requisitos.forEach(el => {
        let child = document.createElement("li")
        child.classList.add("item-requisitos")
        child.innerHTML = el
        listaRequisitos.append(child)
    });
}

const urlJson = `http://127.0.0.1:5501/assets/js/vagas/vagas.json`;

let vagaID = localStorage.getItem("vaga")

fetch(urlJson)
    .then(response => {
        return response.json();
    })
    .then(data => carregarElementosNaPagina(data['Vagas'], vagaID));


function carregarElementosNaPagina(data, vagaID){
    
    let requisitos = data[vagaID]['requisitos']
    let desafios = data[vagaID]['desafios']
    let area = data[vagaID]['area']
    let name = data[vagaID]['nomeDaVaga']
    const title = document.querySelector('title')
    
    title.innerHTML = `Vaga - ${name}`    
    new Vagas(requisitos, desafios, area, name)
    
}

