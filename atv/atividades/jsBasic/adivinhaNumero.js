// Criando um número aleatorio de 1 até 1000
let numero = Math.round(Math.random() * (1000 - 1) + 1);


let valor = 0;
let jogar = window.confirm("Você quer jogar o jogo de adivinhação?");
if(jogar)
{
    while(valor != numero)
    {
        valor = window.prompt(`Instruções: você deve chutar um valor até acerta o número que o computador gera aleatoriamente, esse valor dever ser de 1 até 1000`);
        if(valor == numero)
        {
            window.alert("Acertou!");
        }
            else if(valor < numero)
            {
                window.alert("O valor é menor que o número!");
            }
            else
            {
                window.alert("O valor é maior que o número!");
            }
    }
}
else
{
    window.alert("Você não quer :(");
}
