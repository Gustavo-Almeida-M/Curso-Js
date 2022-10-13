const form = document.querySelector('.formulario');

form.addEventListener('submit', function(informacoes)
{
    informacoes.preventDefault();

    const titulo = informacoes.target.querySelector('.tituloTarefa');
    const descricao = informacoes.target.querySelector('.descricaoTarefa');

    let TT = criaTitulo(titulo);
    let DD = criaDescricao(descricao);

    imprimir(TT, DD);
});

function criaTitulo()
{
    const nomeTitulo = document.createElement('h1');

    return nomeTitulo;
}
function criaDescricao()
{
    const nomeDescricao = document.createElement('p');

    return nomeDescricao;
}
function imprimir(titulo, descricao)
{
    const tarefa = document.querySelector('.localTarefa');
    tarefa.innerHTML = '';

    const imprimirTitulo = criaTitulo();
    const imprimirDescricao = criaDescricao();

    imprimirTitulo.innerHTML = titulo;
    imprimirDescricao.innerHTML = descricao;

    tarefa.appendChild(imprimirTitulo);

}