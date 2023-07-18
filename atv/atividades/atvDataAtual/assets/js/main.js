const principal = document.querySelector('.container');

function calculaDia(hoje)
{
    const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

    return dias[hoje];
}
function calculaMes(mesatual)
{
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[mesatual];
}

function horaBR()
{
    let data = new Date();
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let diaMes = data.getDate()

    dia = calculaDia(dia);
    mes = calculaMes(mes);

    principal.innerHTML = `<h1> Hoje é ${dia} dia ${diaMes}, do mês de ${mes} do ano ${ano} </h1>`;
}

horaBR();