function Vagas(requisitos, desafios, area, name, id) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.requisitos = requisitos;
    this.desafios = desafios;

    return this.criarElemento();
}

Vagas.prototype.criarElemento = function () {
    const area = document.querySelector(".area-vaga")
    area.innerHTML = `<h1>${this.area}</h1>`

    const name = document.querySelector(".name-vaga")
    name.innerHTML = `<h2>${this.name}</h2>`

    const picture = document.querySelector(".image-vaga")
    picture.src = imgPath + `vaga-${this.id}.png`
    console.log(this.id);

    const listaDesafios = document.querySelector(".info-def")
    const listaRequisitos = document.querySelector(".info-req")

    console.log(listaDesafios, listaRequisitos, area, name);

    this.desafios.forEach(el => {
        let child = document.createElement("div")
        child.classList.add("item")
        child.innerHTML = el
        listaDesafios.append(child)
    });

    this.requisitos.forEach(el => {
        let child = document.createElement("li")
        child.classList.add("item")
        child.innerHTML = el
        listaRequisitos.append(child)
    });
}

const urlJson = `https://guilherme-joviniano.github.io/lux-site/assets/js/vagas/vagas.json`;
const imgPath = `../assets/img/vagas/`

function carregarElementosNaPagina(data, vagaID) {
    let requisitos = data[vagaID]['requisitos']
    let desafios = data[vagaID]['desafios']
    let area = data[vagaID]['area']
    let name = data[vagaID]['nomeDaVaga']
    const title = document.querySelector('title')

    title.innerHTML = `Vaga - ${name}`
    new Vagas(requisitos, desafios, area, name, vagaID)
}

let vagaID = localStorage.getItem("vaga")

fetch(urlJson)
    .then(response => {
        return response.json();
    })
    .then(data => carregarElementosNaPagina(data['Vagas'], vagaID));
