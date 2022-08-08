const numero = Number(prompt('digite um número'));

const numeroPrincipal = document.getElementById('numero-principal');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('int');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const duas = document.getElementById('duas');

numeroPrincipal.innerHTML = numero;
raiz.innerHTML = `A raiz quadrada do seu número é igual a: ${numero ** 0.5}`;
inteiro.innerHTML = `O número é inteiro: ${Number.isInteger(numero)}`;
nan.innerHTML = `É NaN: ${Number.isNaN(numero)}`;
baixo.innerHTML = `O número arredondado pra baixo: ${Math.floor(numero)}`;
cima.innerHTML = `O número arredondado pra cima: ${Math.ceil(numero)}`;
duas.innerText = `O número com duas casas decimais: ${numero.toFixed(2)}`


