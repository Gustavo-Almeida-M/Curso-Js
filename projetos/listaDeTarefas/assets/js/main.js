const tarefa = document.querySelector('.tarefa');
const btAdicionarTarefa = document.querySelector('.btAdicionarTarefa');
const lista = document.querySelector('.lista');

//função para criar um elemento li html
function criaLi()
{
    return document.createElement('li');
}

//Adiciona um texto no li escolhido
function adicionarTarefa(msg)
{
    const li = criaLi();
    li.innerText = msg;

    addButton(li);

    lista.appendChild(li);  
}

//Adiciona um tarefa na lista
function criaTarefa()
{
    if(!tarefa.value) return;
    adicionarTarefa(tarefa.value);
    salvaTarefas();
    limpaCampo();
}

//Função auxiliar, serve apenas para limpar o campo de texto e colocar o foco nele
function limpaCampo()
{
    tarefa.value = '';
    tarefa.focus();
}

//Função auxiliar, serve para adicionar um botão junto do li
function addButton(li)
{
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class', 'apagar')
    li.appendChild(button);
}

//Função para que quando for digitado enter ele executara uma adição na lista
tarefa.addEventListener('keypress', function(e)
{
    if(e.keyCode === 13)
    {
        criaTarefa();
    }
});

//Adiciona uma tarefa quando for clicado no botão
btAdicionarTarefa.addEventListener('click', function(e)
{
    criaTarefa();
});

//Função de apagar um item da lista de tarefa
document.addEventListener('click', function(e)
{
    const elemento = e.target;

    if(elemento.classList.contains('apagar'))
    {
        elemento.parentElement.remove();
        salvaTarefas();
    }
});

//Salva as tarefas no localStorage
function salvaTarefas()
{
    const liTarefas = lista.querySelectorAll('li');
    const listaTarefas = [];

    for(let i of liTarefas)
    {
        let textoLi = i.innerText;
        textoLi = textoLi.replace(' Apagar', '');
        listaTarefas.push(textoLi);
    }
    
    const dadosJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefasSalvas', dadosJSON);

}

//Busca a lista anterior se tiver
function adicionaTarefasSalvas()
{
    const tarefas = localStorage.getItem('tarefasSalvas');
    const listaTarefas = JSON.parse(tarefas);

    for(let i of listaTarefas)
    {
        adicionarTarefa(i);
    }
}
adicionaTarefasSalvas();