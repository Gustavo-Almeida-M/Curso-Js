const sum = (...args) => 
{   
  if(args != 0)
  {
    return args.reduce((x, y) => x + y);
  }
  else
  {
    return 0;
  }
}
console.log(sum(5,6,7));