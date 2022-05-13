function Vagas(requisitos, desafios, generalData){
    this.area = generalData[0];
    this.name = generalData[1];
    this.requisitos = requisitos;
    this.desafios = desafios;
    
    return this.criarElemento();
}

Vagas.prototype.criarElemento = function(){
    const area = document.querySelector('.area-atuacao')
    area.innerHTML = `<h1>${this.area}</h1>`
    const name = document.querySelector('.vaga-name')
    name.innerHTML = `<h2>${this.name}</h2>`
    
    const listaDesafios = document.querySelector('.desafios-lista')
    const listaRequisitos = document.querySelector('.requisito-lista')
    
    this.desafios.forEach( el => {
        let child = document.createElement('li')
        child.classList.add('item-desafio')
        child.innerHTML = el
        listaDesafios.append(child)        
    });

    this.requisitos.forEach( el => {
        let child = document.createElement('li')
        child.classList.add('item-requisitos')
        child.innerHTML = el
        listaRequisitos.append(child)
    });
}


const generalData = [
    ['Textil', 'Costureira'],
    ['Marketing', 'Analista de Marketing']
]

const requisitos = [
    //Costureira
    [
    'Experiência na área da costura',
    ],
    //Analista de Marketing
    [
        '* Superior completo em marketing',
        '* Pacote office 1',
        '* Criatividade de desenvolver conteúdos',
        '* Habilidade de comunicação'
    ],
]
const desafios = [
   //Costureira 
    [
        '* Modelar peças de lingerie',
        '* Costurar peças de lingerie ',
        '* Realizar passíveis ajuste da peça e correções da modelagem'
    ],
   //Analista de Marketing 
    [
    '* Planejamento estratégico das rede sociais', 
    '* Acompanhar as redes sociais e o andamento' ,
    '* Entrar em contato com as influencers' ,
    '* Responsável com o envio de peças e aprovação de conteúdos', 
    '* Suporte no planejamento e execução das fotos das campanhas', 
    '* Apoio no planejamento, produção e execução de eventos'
    ]
]
//Json para cada vaga para ficar clean CODE

function criarVagas(elId){
    let vaga = new Vagas(requisitos[elId], desafios[elId], generalData[elId])
    console.log(vaga);
}

let vagaId = localStorage.getItem('vaga')

criarVagas(vagaId)
