function* carros()
{
    yield 'Carro Preto';

    yield 'Carro Azul';

    yield 'Carro vermelho'; 
}

const car = carros();

for(let value of car)
{
    console.log(value);
}