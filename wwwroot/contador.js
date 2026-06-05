// PASSO 3: Criar a variável começando em zero
let contador = 0;

// Selecionando os elementos da tela
const elementoNumero = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnZerar = document.getElementById("btnZerar");

// Função para atualizar o texto na tela e mudar a cor (Passo 5 e 6)
function atualizarTela() {
    elementoNumero.textContent = contador;

    // PASSO 6 (Bônus): Mudar a cor de acordo com o número
    if (contador > 0) {
        elementoNumero.style.color = "green";
    } else if (contador < 0) {
        elementoNumero.style.color = "red";
    } else {
        elementoNumero.style.color = "black"; // preto se for zero
    }
}

// PASSO 4: Adicionar o clique (addEventListener) em cada botão
btnIncrementar.addEventListener("click", function() {
    contador++; // aumenta 1
    atualizarTela();
});

btnDecrementar.addEventListener("click", function() {
    contador--; // diminui 1
    atualizarTela();
});

btnZerar.addEventListener("click", function() {
    contador = 0; // zera o número
    atualizarTela();
});