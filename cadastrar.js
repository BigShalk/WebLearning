document.getElementById("cep").addEventListener("focusout", pesquisar_cep);

async function pesquisar_cep() {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    try {
        const dados = await fetch(url).catch(console.log);
        const response = await dados.json().catch(console.log);
        preencher(response);
    } catch (error) {
        console.log("Não encontrado");
    }
}

function preencher(response) {
    document.getElementById("estado").value = response.localidade;
    document.getElementById("cidade").value = response.uf;
    document.getElementById("bairro").value = response.bairro;
    document.getElementById("endereco").value = response.logradouro;
}

function inicio() {
    const id = window.location.hash;

    if (id == "#1") {
        var at = document.createAttribute("style");
        at.value = "display:none;";
        document.querySelector(".entrar").setAttributeNode(at);
    } else if (id == "#2") {
        var at = document.createAttribute("style");
        at.value = "display:none;";
        document.querySelector(".cadastrar").setAttributeNode(at);
    }

}

inicio();