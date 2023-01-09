function timer(segundos)
{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',
    {
        hour12: false,
        timeZone: 'GMT'
    })
}

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
function iniciaRelogio()
{
    const time = setInterval(function()
    {
        segundos++;
        contador.innerHTML = segundos;    
    }, 1000)
}
iniciar.addEventListener('click', function()
{
    iniciaRelogio()
});
