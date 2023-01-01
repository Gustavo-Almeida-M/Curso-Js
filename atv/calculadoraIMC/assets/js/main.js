const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e)
{
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('.peso');
    const inptAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inptAltura.value);

    if(!peso)
    {
        resultado("Peso invalido", false);
        return;
    }
    if(!altura)
    {
        resultado("Altura invalida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const grauIMC = getGrauImc(imc);

    const msg = `Seu IMC é ${imc}, ${grauIMC}.`;

    resultado(msg, true);
});

function criaP()
{
    const p = document.createElement('p');
    return p; 
}

function getIMC(peso, altura)
{
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getGrauImc(imc)
{
    const grau = ['Abaixo do peso', 'peso normal', 'sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc > 40)
    {
        return grau[5];
    }
    else if(imc > 35)
    {
        return grau[4];
    }
    else if(imc > 30)
    {
        return grau[3];
    }
    else if(imc > 25)
    {
        return grau[2];
    }
    else if(imc > 18.5)
    {
        return grau[1];
    }
    else
    {
        return grau[0];
    }
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