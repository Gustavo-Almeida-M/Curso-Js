/*
    se o número é divisivel por 3 = fizz v
    se o número é divisivel por 5 = Buzz v
    se o número é divisivel por 3 e por 5= fizzBuzz v
    se o número é não divisivel por 3 e nem por 5, retorne o número v
    checar se é um número
    números entre 0 e 100 v
*/
function fizzBuzz(valor)
{
    if(isNaN(valor))
    {
        console.log("Não é um número");
    }
    else if(valor < 0 || valor > 100)
    {
        console.log("Valor invalido");
    }
    else if(valor % 3 == 0 && valor % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(valor % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(valor % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(valor);
    }
}
for(let i = 0; i < 30; i++)
{
    fizzBuzz(i);
}
