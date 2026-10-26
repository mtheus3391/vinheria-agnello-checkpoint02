// =====================================================
// Sistema de Avaliação de Estoque e Tendência de Vinhos
// Vinheria Agnello - Checkpoint 02
// =====================================================

// -----------------------------------------------------
// FUNÇÕES DE VALIDAÇÃO
// -----------------------------------------------------

// Pede um texto e repete até o usuário digitar algo válido
function lerTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("Entrada inválida. O campo não pode ficar vazio.");
        valor = prompt(mensagem);
    }

    return valor.trim();
}

// Pede um número e repete até estar dentro do intervalo permitido
function lerNumero(mensagem, minimo, maximo) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor < minimo || valor > maximo) {
        alert("Digite um número entre " + minimo + " e " + maximo + ".");
        valor = Number(prompt(mensagem));
    }

    return valor;
}

// Teste temporário (vamos apagar depois)
let testeNome = lerTexto("Nome do vinho:");
let testeSafra = lerNumero("Safra (ano):", 1900, 2026);
console.log(testeNome, testeSafra);