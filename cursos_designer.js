let sectionConteudo2 = document.querySelector('.cursos2');

function pegarDados2(id) {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                console.log("Erro ao acessar o JSON")
                return
            }
            console.log(dados);
            atribuirDados2(dados, id);
        })
}

function atribuirDados2(dados, id) {

    let imgCursos = document.getElementsByClassName('imgCursos2');
    let nome = document.getElementsByClassName('nome2');
    let descricao = document.getElementsByClassName('descricao2');


    nome[id].textContent = dados.cursos_designer[id].nome;
    imgCursos[id].setAttribute('src', dados.cursos_designer[id].img);
    descricao[id].textContent = dados.cursos_designer[id].descricao;

}

function desenharCarta2(id) {

    // CARD
    let card = document.createElement("div");
    card.setAttribute('class', 'curso');
    sectionConteudo2.appendChild(card);

    //IMAGE COURSE
    let imgCursos = document.createElement("img");
    imgCursos.setAttribute('src', 'imagens/Capture.PNG');
    imgCursos.setAttribute('class', 'imgCursos2');
    card.appendChild(imgCursos);

    //DIVISION | INFORMATION TEXT
    let div = document.createElement('div');
    div.setAttribute('class', 'info_text');
    card.appendChild(div);

    //NAME
    let name = document.createElement('h3');
    name.setAttribute('class', 'nome2');
    div.appendChild(name);
    name.textContent = 'Nome';

    //DESCRIPTION
    let description = document.createElement('p');
    description.setAttribute('class', 'descricao2');
    div.appendChild(description);
    description.textContent = 'lorem 1';

    //BUTTON
    let button = document.createElement('button');
    button.textContent = 'Conhecer Curso';
    div.appendChild(button);

    pegarDados2(id);
}


pegarDados2(0);
desenharCarta2(1);
desenharCarta2(2);
desenharCarta2(3);
desenharCarta2(4);