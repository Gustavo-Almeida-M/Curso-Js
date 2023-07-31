const nomes = ['gustavo', 'Caio', 'João', 'Felipe'];
const nome = nomes.slice(0, 2);
const nomesJ = nomes.join(', ');
const nomesS = nomesJ.split();
nomes.unshift('Pedro');
nomes.pop();

console.log(nome);
console.log(nomesJ);
console.log(nomesS);
console.log(nomes);