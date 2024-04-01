class Carro
{
    constructor(modelo, nRodas)
    {
        this.modelo = modelo;
        this.nRodas = nRodas;
        this.pneusTrocados = false;
    }

    static trocaPneus()
    {
        this.pneusTrocados = true;
        console.log(this.pneusTrocados);
    }
}

const car1 = new Carro('gol', 4);
const car2 = new Carro('Voiage', 4);

Carro.trocaPneus();

console.log(car1);
console.log(car2);