function timer(segundos)
{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',
    {
        hour12: false,
        timeZone: 'UTC'
    })
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

iniciar.addEventListener('click', function()
{
    contador.classList.remove('pausado');
    iniciaRelogio();
});
pausar.addEventListener('click', function()
{
    contador.classList.add('pausado');
    clearInterval(time);
});
zerar.addEventListener('click', function()
{
    clearInterval(time);
    contador.innerHTML = '00:00:00';
    segundos = 0;
});

