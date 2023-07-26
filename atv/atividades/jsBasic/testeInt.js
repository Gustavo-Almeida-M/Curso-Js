var addTwoNumbers = function(l1, l2)
{
    l1 = l1.reverse();
    l2 = l2.reverse();

    let aux = [];

    for(let i = 0, j = 0; i < l1.legth || j < l2.length; i++, j++)
    {
        console.log(l1[i] , l2[j]);
        aux.push(l1[i] + l2[j])
    }
    for(let i = 0, j = 0; i < l1.legth || j < l2.length; i++, j++)
    {
        if(i >= j && aux[i] >= 10)
        {
            aux[i] -= 10;
            aux[i + 1]++;
        }
    }
    return aux;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));