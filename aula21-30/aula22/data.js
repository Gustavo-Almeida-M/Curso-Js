//Função pra formatar datas.
function adicionaZero(dataParaModificar)
{
    return dataParaModificar >= 10 ? dataParaModificar : `0${dataParaModificar}`;
}

function formatarData(dataPassada)
{
    const dia = adicionaZero(dataPassada.getDate());
    const mes = adicionaZero(dataPassada.getMonth());
    const ano = adicionaZero(dataPassada.getFullYear());
    const hora = adicionaZero(dataPassada.getHours());
    const minuto = adicionaZero(dataPassada.getMinutes());
    const segundos = adicionaZero(dataPassada.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundos}`
}

const dataAtual = new Date();


console.log(formatarData(dataAtual));