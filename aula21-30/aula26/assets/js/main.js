const paragrafos = document.querySelector('.paragrafos');
const paragrafosTotal = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const corBody = estiloBody.backgroundColor;

for(let i of paragrafosTotal)
{
    i.style.backgroundColor = corBody;
    i.style.color = '#fff';
}