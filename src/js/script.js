// ===================================================
// Sistema Básico de Gerenciamento de Vinhos
// Vinharia Agnello
// ===================================================

// ---------------------------------------------------
// 1. Coleta das informações do vinho usando prompt()
// ---------------------------------------------------

const nomeVinho = prompt("Digite o nome do vinho:");
const tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
const safraVinho = prompt("Digite a safra do vinho (ano):");
const quantidadeEstoque = prompt("Digite a quantidade em estoque:");

// ---------------------------------------------------
// 2. Alerta confirmando que o cadastro foi realizado
// ---------------------------------------------------

alert("Cadastro realizado! Veja os detalhes no console.");

// ---------------------------------------------------
// 3. Aviso antes de exibir os detalhes no console
// ---------------------------------------------------

alert("A seguir, veja os detalhes do vinho no console.");

// ---------------------------------------------------
// 4. Exibição organizada dos dados no console
// ---------------------------------------------------

console.log("========================================");
console.log("         FICHA DO VINHO CADASTRADO       ");
console.log("========================================");
console.log("Nome do vinho:        " + nomeVinho);
console.log("Tipo:                 " + tipoVinho);
console.log("Safra:                " + safraVinho);
console.log("Quantidade em estoque: " + quantidadeEstoque);
console.log("========================================");