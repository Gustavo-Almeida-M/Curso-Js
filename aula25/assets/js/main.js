const lista = 
[
    {tag: 'div', texto: "Carro 1"},
    {tag: 'p', texto: "Carro 2"},
    {tag: 'header', texto: "Carro 3"},
    {tag: 'footer', texto: "Carro 4"}
];

for(let i = 0; i < lista.length; i++)
{
    let {tag, texto} = lista[i];

    console.log(tag, texto);
}
