let numeroVisitante = 0;
let contador = document.querySelector(".contador")
let visitantesAnteriores = 0;
let imprimeAnteriores = document.querySelector(".numeroVisi");

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
    visitantesAnteriores = numeroVisitante;
    imprimeAnteriores.innerText += " " + visitantesAnteriores + "-";
}