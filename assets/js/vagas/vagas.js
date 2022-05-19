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
const btnCurriculo = document.querySelector(".btn-curriculo")
const btnReq = document.querySelector(".btn-req")
const btnDef = document.querySelector(".btn-des")

function carregarElementosNaPagina(data, vagaID) {
    let requisitos = data[vagaID]['requisitos']
    let desafios = data[vagaID]['desafios']
    let area = data[vagaID]['area']
    let name = data[vagaID]['nomeDaVaga']
    const title = document.querySelector('title')

    title.innerHTML = `Vaga - ${name}`
    new Vagas(requisitos, desafios, area, name, vagaID)
}
function createEmailMessage() {
    const nomeDaVaga = document.querySelector('.name-vaga').textContent
    return `Quero me Candidar para Trabalhar com a Lux Lingerie, como ${nomeDaVaga}, segue em anexo o curriculo (!INSIRA O SEU CURRICULO!)`
}
//AddEventListener of the page vagas specify
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
btnCurriculo.addEventListener("click", function () {
    const message = createEmailMessage();
    window.location.href = "mailto:?subject=Subject&body=" + message;
})
//End of eventListenner


let vagaID = localStorage.getItem("vaga")

fetch(urlJson)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const data_vaga = data['Vagas'];

        carregarElementosNaPagina(data_vaga, vagaID)

        return data_vaga
    })