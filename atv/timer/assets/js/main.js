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
const tempoMaximo = document.querySelector('.tempoMaximo');
let segundos = 0;
let time;
function iniciaRelogio()
{
    time = setInterval(function()
    {
        segundos++;
        contador.innerHTML = timer(segundos);    
    }, 1000)
}

document.addEventListener('click', function(e)
{
    const localClicado = e.target;

    //Comando para zerar o contador
    if(localClicado.classList.contains('zerar'))
    {
        contador.classList.remove('pausado');
        clearInterval(time);
        contador.innerHTML = '00:00:00';
        segundos = 0;
    }

    //Comando para pausar
    if(localClicado.classList.contains('pausar'))
    {
        contador.classList.add('pausado');
        clearInterval(time);
    }

    //Comando para iniciar
    if(localClicado.classList.contains('iniciar'))
    {
        contador.classList.remove('pausado');
        iniciaRelogio();
    }
});


