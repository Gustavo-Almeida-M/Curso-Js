// Setup
function phoneticLookup(val) 
{
  // Only change code below this line
      const lookup = 
      {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
      }
  // Only change code above this line
  let result = lookup[val];
  return result;
}
console.log(phoneticLookup("alpha"));