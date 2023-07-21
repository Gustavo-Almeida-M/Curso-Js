const bloco = document.getElementById('container');
const paragrafos = bloco.querySelectorAll('p');

bloco.style.backgroundColor = 'red';

let estilosBody = getComputedStyle(document.body);

for(let i of paragrafos)
{
    i.classList.add('carro');
    i.style.backgroundColor = estilosBody.backgroundColor;
    i.style.color = '#fff';
}

