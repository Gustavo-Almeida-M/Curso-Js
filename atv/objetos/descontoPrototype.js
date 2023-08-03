function Carro(modelo, preco)
{
    this.modelo = modelo;
    this.preco = preco;
}

Carro.prototype.calculaIPVA = function(percentual)
{

    const IPVA = this.preco * (percentual / 100);
    return IPVA;
}

const car2 = 
{
    modelo: 'Golf',
    preco: 30000
}

Object.setPrototypeOf(car2, Carro.prototype);

const car = new Carro('Gol', 20000);

console.log(car2.calculaIPVA(1));

console.log(car.calculaIPVA(5));