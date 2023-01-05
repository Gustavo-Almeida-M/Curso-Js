function horaAtual()
{
    let data = new  Date();
    return data.toLocaleDateString('pt-BR',
    {
        hour12: false
    });
}
let hora = setInterval( function()
    {
        console.log(horaAtual()); 
    }, 1000);
setTimeout(function()
{
    clearInterval(hora);
}, 10000);