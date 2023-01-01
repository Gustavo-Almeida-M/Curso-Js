// const carro =
// {
//     rodas: 4,
//     marca1: 'Porsche',
//     modelo2: 'Ford',
//     ano: 2010 
// }

// console.log(carro.ano);
function criarRegistro(nome, idade, renda) 
{
    return pessoa =
    {
    nome,
    idade,
    renda
    };
}

const pessoa1 = criarRegistro('Gustavo', 99, 10.00);

console.log(pessoa1.idade);

const juncao = 
{
    nome: 'Ferreira',
    idade: 38,

    ola()
    {
        console.log(`Olá, ${this.nome}`);
    }
}
console.log(juncao.ola());