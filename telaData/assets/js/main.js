
function converteDia(diaSemana)
{
    const dia = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    return dia[diaSemana];
}
function converteMes(valorMes)
{
   const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

   return meses[valorMes];
}
function adicionaZero(hora)
{
    return hora >= 10? hora : `0${hora}`;
}
const local = document.querySelector('.posicao');

const data = new Date();

const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = adicionaZero(data.getHours());
const minuto = adicionaZero(data.getMinutes());

const diaTexto = converteDia(diaSemana);
const mesTexto = converteMes(mes);


console.log(`${diaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora} ${minuto}`);

local.innerHTML = `<h1> ${diaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora} ${minuto} </h1>`;
