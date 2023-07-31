const valores = [1, 4, 7, 8, 10, 23, 3, 44, 65, 2];
const carros = 
[
    {nome: 'Volvo X60', ano: '2020'},
    {nome: 'Polo', ano: '2010'},
    {nome: 'Golf', ano: '2018'},
    {nome: 'Maclaren F1', ano: '1990'},
    {nome: 'Amarok', ano: '2023'}
]

//filtrando valores maiores que um determinado valor
// const filtrado = valores.filter(valor => valor > 5);
// console.log(filtrado);

//filtrando nomes
const carrosNomesGrandes = carros.filter(valor => valor.nome.length >= 5);
console.log(carrosNomesGrandes);
const carrosVelhos = carros.filter(valor => valor.ano <= 2010);
console.log(carrosVelhos);
const terminaComO = carros.filter(valor => valor.nome.toLowerCase().endsWith('0'));
console.log(terminaComO);
const comecaComA = carros.filter(valor => valor.nome.toLowerCase().startsWith('a'));
console.log(comecaComA);