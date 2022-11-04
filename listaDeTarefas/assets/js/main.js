const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e)
{
    e.preventDefault();
    
    const inputTitulo = e.target.querySelector('.titulo');
    const inputDescricao = e.target.querySelector('.descricao');


    resultado(inputTitulo.value, inputDescricao.value);
});

function criaH2()
{
    const h2 = document.createElement('h2');
    return h2; 
}
function criaP()
{
    const h2 = document.createElement('p');
    return h2; 
}

function resultado(titulo, descricao)
{
    const valorTitulo = document.querySelector('.areaTitulo');
    valorTitulo.innerHTML = '';
    const valorDescricao = document.querySelector('.areaDescricao');
    valorDescricao.innerHTML = '';
    const areaTitulo = criaH2();
    const areaDescricao = criaP();
    
    
    areaTitulo.innerHTML = titulo;
    areaDescricao.innerHTML = descricao;
    
    valorTitulo.appendChild(areaTitulo);
    valorDescricao.appendChild(areaDescricao);
}