let sectionConteudo = document.querySelector('.cursos');
const url = 'cursos.json';

function pegarDados(id) {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                console.log("Erro ao acessar o JSON")
                return
            }
            console.log(dados);
            atribuirDados(dados, id);
        })
}

function atribuirDados(dados, id) {

    let imgCursos = document.getElementsByClassName('imgCursos');
    let nome = document.getElementsByClassName('nome');
    let descricao = document.getElementsByClassName('descricao');


    nome[id].textContent = dados.cursos_desenvolvimento[id].nome;
    imgCursos[id].setAttribute('src', dados.cursos_desenvolvimento[id].img);
    descricao[id].textContent = dados.cursos_desenvolvimento[id].descricao;

}

function desenharCarta(id) {

    // CARD
    let card = document.createElement("div");
    card.setAttribute('class', 'curso');
    sectionConteudo.appendChild(card);

    //IMAGE COURSE
    let imgCursos = document.createElement("img");
    imgCursos.setAttribute('src', 'imagens/Capture.PNG');
    imgCursos.setAttribute('class', 'imgCursos');
    card.appendChild(imgCursos);

    //DIVISION | INFORMATION TEXT
    let div = document.createElement('div');
    div.setAttribute('class', 'info_text');
    card.appendChild(div);

    //NAME
    let name = document.createElement('h3');
    name.setAttribute('class', 'nome');
    div.appendChild(name);
    name.textContent = 'Nome';

    //DESCRIPTION
    let description = document.createElement('p');
    description.setAttribute('class', 'descricao');
    div.appendChild(description);
    description.textContent = 'lorem 1';

    //BUTTON
    let button = document.createElement('button');
    button.textContent = 'Conhecer Curso';
    div.appendChild(button);

    pegarDados(id);
}

pegarDados(0);
desenharCarta(1);
desenharCarta(2);
desenharCarta(3);
desenharCarta(4);
desenharCarta(5);
desenharCarta(6);