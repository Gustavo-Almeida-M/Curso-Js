function semParametros()
{
    let somaTotal = 0;
    for(let i of arguments)
    {
        somaTotal += i;
    }

    return somaTotal;
}
function comParametros(a, b = 3, ...c)
{
    a +=b;
    for(let i of c)
    {
        a += i;
    }
    return a;
}

//console.log(semParametros(1,2,67,89,2,4));

console.log(comParametros(10, 5, 10, 30, 50));
