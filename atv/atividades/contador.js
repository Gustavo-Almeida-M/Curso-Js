// Only change code below this line
function countdown(n)
{
  if(n > 0)
  {
    let contador =  countdown(n - 1);
    contador.unshift(n);
    return contador;
  }
  else
  {
    return [];
  }
}
console.log(countdown(10));