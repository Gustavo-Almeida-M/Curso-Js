function maiorValor(primeiroValor, segundoValor) 
{
    if(primeiroValor > segundoValor)
    {
        return primeiroValor;
    }
    else if(segundoValor > primeiroValor)
    {
        return segundoValor;
    }
    else
    {
        return segundoValor;
    }
};
// Coloque dois valores nas variaveis:
const primeiroValor = 50;
const segundoValor = 30;


console.log("Maior valor é: " + maiorValor(primeiroValor, segundoValor));