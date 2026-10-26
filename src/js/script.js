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

// -----------------------------------------------------
// FUNÇÕES DE ANÁLISE DO VINHO
// -----------------------------------------------------

// Retorna true se o estoque for menor que 5
function estoqueBaixo(quantidade) {
return quantidade < 5;
}

// Classifica o vinho de acordo com a idade da safra
function classificarVinho(safra) {
let anoAtual = new Date().getFullYear(); // variável local
let idade = anoAtual - safra; // variável local

if (idade <= 5) {
return "jovem";
} else if (idade <= 15) {
return "amadurecido";
} else {
return "antigo";
}
}

// -----------------------------------------------------
// FUNÇÃO DE EXIBIÇÃO
// -----------------------------------------------------

// Mostra os dados do vinho no console e avisa por alert()
function mostrarVinho(nome, safra, quantidade, classificacao, baixo) {
console.log("=======================================");
console.log("Nome do vinho: " + nome);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade);
console.log("Classificação: " + classificacao);

if (baixo) {
console.log("ATENÇÃO: ESTOQUE BAIXO!");
}

console.log("=======================================");

alert("Vinho \"" + nome + "\" cadastrado! Veja os detalhes no console.");}

// -----------------------------------------------------
// PROGRAMA PRINCIPAL
// -----------------------------------------------------

// Contadores e controle (variáveis globais do programa)
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let nomeMaisAntigo = "";
let safraMaisAntiga = 9999;
let continuar = true;
const LIMITE_VINHOS = 5;

// Uma variável para cada informação de cada vinho (sem arrays)
let nome1, safra1, quant1;
let nome2, safra2, quant2;
let nome3, safra3, quant3;
let nome4, safra4, quant4;
let nome5, safra5, quant5;

// Repete enquanto o usuário quiser cadastrar e houver espaço
while (continuar && totalCadastros < LIMITE_VINHOS) {

// Variáveis locais deste bloco (existem só dentro do laço)
let nome = lerTexto("Nome do vinho:");
let safra = lerNumero("Safra (ano):", 1900, new Date().getFullYear());
let quant = lerNumero("Quantidade em estoque:", 0, 100000);

// Conta o cadastro
totalCadastros++;

// Guarda nas variáveis numeradas, de acordo com o número do cadastro
if (totalCadastros === 1) {
nome1 = nome; safra1 = safra; quant1 = quant;
} else if (totalCadastros === 2) {
nome2 = nome; safra2 = safra; quant2 = quant;
} else if (totalCadastros === 3) {
nome3 = nome; safra3 = safra; quant3 = quant;
} else if (totalCadastros === 4) {
nome4 = nome; safra4 = safra; quant4 = quant;
} else if (totalCadastros === 5) {
nome5 = nome; safra5 = safra; quant5 = quant;
}

// Verifica estoque baixo e atualiza o contador
let baixo = estoqueBaixo(quant);
if (baixo) {
totalEstoqueBaixo++;
}

// Compara manualmente para achar a safra mais antiga
if (safra < safraMaisAntiga) {
safraMaisAntiga = safra;
nomeMaisAntigo = nome;
}

// Classifica e mostra os dados
let classificacao = classificarVinho(safra);
mostrarVinho(nome, safra, quant, classificacao, baixo);

// Pergunta se quer cadastrar outro (só se ainda houver espaço)
if (totalCadastros < LIMITE_VINHOS) {
continuar = confirm("Deseja cadastrar outro vinho?");
} else {
alert("Limite de " + LIMITE_VINHOS + " vinhos atingido.");
}
}

// -----------------------------------------------------
// RESUMO FINAL
// -----------------------------------------------------
alert(
"RESUMO FINAL\n" +
"Cadastros realizados: " + totalCadastros + "\n" +
"Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +
"Safra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")"
);
