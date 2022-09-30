const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('.peso');
    const inptAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inptAltura.value);

    if(peso && altura)
    {
        console.log(peso, altura);
    }
    else
    {
        console.log("Não é um número!");
    }
});

function criaP()
{
    const p = document.createElement('p');
    return p; 
}

function resultado(msg)
{
    const valor = document.querySelector('.valor');
    valor.innerHTML = '';

    const p = criaP();
    p.classList.add('resultado-bom');

    p.innerHTML = msg;
    valor.appendChild(p);
}