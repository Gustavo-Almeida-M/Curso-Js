function Veiculo(nRodas, nPassageiros)
{
    this.nRodas = nRodas;
    this.nPassageiros = nPassageiros;
}

Veiculo.prototype.calcPesopotencia = function()
{
    return this.peso/this.potencia;
}

function Carro(nRodas, nPassageiros, potencia, peso)
{
    Veiculo.call(this, nRodas, nPassageiros);
    this.potencia = potencia;
    this.peso = peso
}

Carro.prototype = Veiculo.prototype;
Carro.prototype.constructor = Carro;

const car1 = new Carro(4, 5, 100, 1200)
console.log(car1.calcPesopotencia());
