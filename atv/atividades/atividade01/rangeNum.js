function rangeOfNumbers(startNum, endNum)
{
  if(startNum > endNum)
  {
    return [];
  }
  else
  {
    const contador = rangeOfNumbers(startNum, endNum - 1);
    contador.push(endNum);
    return contador;
  }
};
console.log(rangeOfNumbers(1, 10));