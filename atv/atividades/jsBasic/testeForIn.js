const Car = 
{
    modelo: 'Gol',
    ano: '2005',
    motor: 1.0
}

for(let i in Car)
{
    console.log(i + ':', Car[i]);
}

console.log('##############');

let carros = ['Monza', 'Opala', 'Uno'];

carros.forEach(function(e, indice, array)
{
    array[indice] = e + indice;
});

for(let i of carros)
{
    console.log(i);
}