const _fabrica = Symbol('Fabrica');
class Carro
{
    constructor(modelo, ano)
    {
        this.modelo = modelo;
        this.ano = ano;
        this[_fabrica] = 'Volkswagen';
    }

    get fabrica()
    {
        return this[_fabrica];
    }

    set fabrica(nome)
    {
        this[_fabrica] = nome;
        return;
    }
}

const car1 = new Carro('Golf', 2019);

car1.fabrica = 'Ferari'

console.log(car1.fabrica);