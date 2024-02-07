const form = document.getElementById("form-agenda")
const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
});


function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if(numeros.includes(inputNumeroContato.value)) {
        alert(`A atividade: ${inputNumeroContato.value} já foi inserida`)
        console.log("blablablabla")
    } else {
        nomes.push(inputNomeContato)
        numeros.push(inputNumeroContato)

        let linha = '<tr class="tbody">'
        linha += `<td>${inputNomeContato.value.toUpperCase()}</td>`
        linha += `<td class="td-numero">${Number(inputNumeroContato.value)}</a></td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}