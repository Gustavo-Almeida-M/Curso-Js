const nome = prompt("Digite seu nome:");

let confirm = false;

while(confirm == false)
{
    if(nome == '')
    {
        alert("Você não digitou um nome");
        nome = prompt("Digite seu nome");
    }
    else
    {
        alert("Seu nome é:" + nome);
        confirm = true;
    }
}