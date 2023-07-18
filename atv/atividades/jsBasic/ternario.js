function checkSign(num) 
{
    return (num > 0) ? "O número é positivo" : (num < 0) ? "O número é negativo" : "O número é igual a zero";
}

console.log(checkSign(-10));