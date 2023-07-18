let operacao = document.querySelector('#calcular');
let inputPeso = document.querySelector('#peso');
let inputAltura = document.querySelector('#altura');

operacao.addEventListener( "submit" , function(e)
{
    e.preventDefault();
    
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    console.log(peso, altura);

    if(!peso || !altura)
    {
        imprimiResultado('Valores invalidos', false);
        return;
    }
    else
    {
        let imc = peso / (altura * altura);
        imprimiResultado(imc.toFixed(2), true)
    }
});

function calcIMC(imc)
{
    let categoriasIMC = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if(imc <= 18.5)
    {
        return categoriasIMC[0];
    }
    else if(imc <= 24.9)
    {
        return categoriasIMC[1];
    }
    else if(imc <= 29.9)
    {
        return categoriasIMC[2];
    }
    else if(imc == 34.9)
    {
        return categoriasIMC[3];
    }
    else if(imc == 39.9)
    {
        return categoriasIMC[4];
    }
    else if(imc >= 40)
    {
        return categoriasIMC[5];
    }
}

function imprimiResultado(imc, validade)
{
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    let p = document.createElement('p');
    p.classList.add('editResultado');

    if(validade)
    {
        p.innerHTML = "Seu IMC igual a " + imc + ' e você esta na categoria ' +calcIMC(imc);
        p.classList.add('resultadoPositivo');
    }
    else
    {
        p.innerHTML = imc;
        p.classList.add('resultadoNegativo');
    }
    resultado.appendChild(p);
}

