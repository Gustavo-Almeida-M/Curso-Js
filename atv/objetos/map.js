const Carros = 
[
    {ano: 2, modelo: '911'},
    {ano: 3, modelo: 'Golf'},
    {ano: 1, modelo : 'Ranger'}
]

// const novosCarros = {};
// for(const carro of Carros)
// {
//     const {ano} = carro;
//     novosCarros[ano] = {...carro};
// }

const novosCarros = new Map();

for(const carro of Carros)
{
    const {ano} = carro;
    novosCarros.set(ano, {...carro});
}

novosCarros.delete(2);

console.log(novosCarros)