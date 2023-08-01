const valores = [1, 4, 7, 8, 10, 23, 3, 44, 65, 2];
const carros = 
[
    {nome: 'Volvo X60', ano: '2020'},
    {nome: 'Polo', ano: '2010'},
    {nome: 'Golf', ano: '2018'},
    {nome: 'Maclaren F1', ano: '1990'},
    {nome: 'Amarok', ano: '2023'}
]

const nomeCarros = carros.map(valor => valor.nome)

console.log('Nome dos carros:', nomeCarros);

const comId = carros.map(function (valor, index)
{
    const newObj = {...valor};
    newObj.id = index;
    return newObj;
});
console.log(comId);
console.log(carros);