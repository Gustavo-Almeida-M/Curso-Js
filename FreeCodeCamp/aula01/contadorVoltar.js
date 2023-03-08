let numeroVisitante = 0;
let contador = document.querySelector(".contador");
let imprimeAnteriores = document.querySelector(".numeroVisi");
let numeroSaves = 0;

function incrementaVoltar()
{
    numeroVisitante++;
    console.log(numeroVisitante);
    contador.innerText = numeroVisitante;
}
function zerar()
{
    numeroVisitante = 0;
    contador.innerText = numeroVisitante;
}
function save()
{
    if(numeroSaves != 0)
    {
        imprimeAnteriores.innerText += " - " + numeroVisitante + "";
    }
    else
    {
        imprimeAnteriores.innerText += " " + numeroVisitante;
    }
    numeroSaves++;
}