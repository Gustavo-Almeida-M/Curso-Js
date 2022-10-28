const lista = 
[
    //Criando a lista com os elementos html e o texto
    {tag: 'div', texto: "Carro 1"},
    {tag: 'p', texto: "Carro 2"},
    {tag: 'header', texto: "Carro 3"},
    {tag: 'footer', texto: "Carro 4"}
];

//Escolhendo o elemento no arquivo html
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < lista.length; i++)
{
    //Desconstruindo o array
    let {tag, texto} = lista[i];
    //Passando qual tag sera criada
    let elementoCriado = document.createElement(tag);
    //Passando o texto
    elementoCriado.innerHTML = texto;
    //Acionando o elemento
    div.appendChild(elementoCriado);
}
//Imprimindo os elementos
container.appendChild(div);