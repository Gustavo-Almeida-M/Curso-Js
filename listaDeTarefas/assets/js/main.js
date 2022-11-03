const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e)
{
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('.peso');
    const inptAltura = e.target.querySelector('.altura');

    const peso = inputPeso.value;
    const altura = inptAltura.value;

console.log(peso, altura);

    resultado(msg, true);
});

function criaP()
{
    const p = document.createElement('p');
    return p; 
}

function resultado(msg, isValid)
{
    const valor = document.querySelector('.valor');
    valor.innerHTML = '';
    const p = criaP();

    if(isValid)
    {
        p.classList.add('valido');
    }
    else
    {
        p.classList.add('invalido');
    }

    
    p.innerHTML = msg;
    
    valor.appendChild(p);
}