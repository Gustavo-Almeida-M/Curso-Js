class Veiculo
{
    constructor(nome, nRodas)
    {
        this.nome = nome;
        this.nRodas = nRodas
    }
}

class Carro extends Veiculo
{
    constructor(nome, nRodas, cor)
    {
        super(nome, nRodas)
        this.cor = cor; 
    }
}

const car1 = new Carro('Fox', 4, 'Prata');

console.log(car1.nome);