// let idade = [20, 30 , 40];
// let [idadeG, idadeF, idadeE] = idade
// console.log(idadeE, idadeF, idadeG);

let pessoa = 
{
    nome: "Gustavo",
    idade: 96,
    peso: 186,

    vizinho:
    {
        nomeV: "Carlos"
    }
};

let {nome, idade, peso, vizinho: {nomeV}} = pessoa;

console.log(nome, idade, peso, nomeV);