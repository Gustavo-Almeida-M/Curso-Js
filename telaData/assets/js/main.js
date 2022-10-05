
function converteDia(diaSemana)
{
    let diaNome;

    switch(diaSemana)
    {
        case 0:
            diaNome = "Domingo";
            return diaNome;
        case 1: 
            diaNome = "Segunda";
            return diaNome;
        case 2: 
            diaNome = "Terça";
            return diaNome;
        case 3: 
            diaNome = "Quarta";
            return diaNome;
        case 4: 
            diaNome = "Quinta";
            return diaNome;
        case 5: 
            diaNome = "Sexta";
            return diaNome;
        case 6: 
            diaNome = "Sabado";
            return diaNome;
        default:
            diaNome = "Não é um dia valido";
            return diaNome;
    }
}
function converteMes(valorMes)
{
    let nomeMes;

    switch(valorMes)
    {
        case 0:
            nomeMes = "Janeiro";
            return nomeMes;
        case 1: 
            nomeMes = "Fevereiro";
            return nomeMes;
        case 2: 
            nomeMes = "Março";
            return nomeMes;
        case 3: 
            nomeMes = "Abril";
            return nomeMes;
        case 4: 
            nomeMes = "Maio";
            return nomeMes;
        case 5: 
            nomeMes = "Junho";
            return nomeMes;
        case 6: 
            nomeMes = "Julho";
            return nomeMes;
        case 7: 
            nomeMes = "Agosto";
            return nomeMes;
        case 8: 
            nomeMes = "Setembro";
            return nomeMes;
        case 9: 
            nomeMes = "Outubro";
            return nomeMes;
        case 10: 
            nomeMes = "Novembro";
            return nomeMes;
        case 11: 
            nomeMes = "Dezembro";
            return nomeMes;
        default:
            nomeMes = "Não é um dia valido";
            return nomeMes;
    }
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
