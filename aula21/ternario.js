//teste para aprovar compra

//Caso hipotético para saber se o saldo do usuario é maior que o valor - o desconto
let saldo = 5;
let valorOriginal = 15;
let diminuicaoDesconto = 5;

let valorPromocao = valorOriginal - diminuicaoDesconto;

let resultado = saldo >= valorPromocao ? 'A compra foi aprovada' : 'Compra recusada';

console.log(resultado);