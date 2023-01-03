function soma(x, y)
{
    if(isNaN(x) || isNaN(y))
    {
        throw('X e Y precisam ser números');
    }

    return x + y;
}
try
{
console.log(soma(100, "AAAA")); 
}
catch(err)
{
    console.log("Ocorreu um erro");
}