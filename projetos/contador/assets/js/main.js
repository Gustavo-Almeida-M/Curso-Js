function timer(segundos)
{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',
    {
        hour12: false,
        timeZone: 'UTC'
    });
}

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let time;


function iniciaRelogio()
{
    time = setInterval(function()
    {
        segundos++;
        contador.innerHTML = timer(segundos);
    }, 1000);
}

document.addEventListener('click', function(ativar)
{
    const localClicado = ativar.target;
    if(localClicado.classList.contains('iniciar'))
    {
        contador.classList.remove('pausado');
        iniciaRelogio();
    }
    if(localClicado.classList.contains('pausar'))
    {
        contador.classList.add('pausado');
        clearInterval(time);
    }
    if(localClicado.classList.contains('zerar'))
    {
        contador.classList.remove('pausado');
        segundos = 0;
        clearInterval(time);
        contador.innerHTML = timer(segundos);
    }
});