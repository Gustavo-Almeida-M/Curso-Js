let nomes = ['Gustavo', 'Caio', 'João'];
let idade = [45, 39, 67];

//imprimindo o array com uma posição especifica.
console.log(nomes[1]);
console.log(idade[2]);

//Diz o tamanho do array.
console.log(nomes.length);

//Adicionando um nome na ultima posição.
nomes[nomes.length] = 'felipe';
console.log(nomes);

//Push serve para adicionar um novo valor no fim, parecido com o código de cima, só que mais simples.
nomes.push('Fabricio');
console.log(nomes);

//Adicionando um valor no começo.
nomes.unshift('Fernando');
console.log(nomes);

//Excluindo o ultimo valor.
nomes.pop();
console.log(nomes);

//Podemos guardar esse valor.
let excluido = nomes.pop();
console.log(excluido);

//Podemos também remover do começo.
let excluidoInicio = nomes.shift();
console.log(excluidoInicio);

//Podemos especificar quais podem ser exibidos.
console.log(nomes.slice(0, 2));

//Perguntando se "nomes" é um array.
if(nomes instanceof Array)
{
    console.log('Sim.');
}
else
{
    console.log('Não.');
}

