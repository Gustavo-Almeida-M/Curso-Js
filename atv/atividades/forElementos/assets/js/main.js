const container = document.querySelector('.container');

const elementos = 
[
    {tag: 'h1', texto : 'Carros usados'},
    {tag : 'p', texto: 'abaixo de 30 mil'},
    {tag : 'h1', texto: 'produtos anunciados'}
];

for(let i = 0; i < elementos.length; i++)
{
    let {tag, texto} = elementos[i];

    let tags = document.createElement(tag);

    tags.innerHTML = texto;

    container.appendChild(tags);
}