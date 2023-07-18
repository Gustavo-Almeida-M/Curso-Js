// Setup
const contacts = 
[
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
  
function lookUpProfile(name, prop) 
{
    // Only change code below this line
    
    for(let i = 0; i < contacts.length; i++)
    { 
      if(name == contacts[i].firstName)
      {
        switch(prop)
        {
          case "lastName":
            return contacts[i].lastName;
          case "number":
            return contacts[i].number;
          case "likes":
            return contacts[i].likes;
          default:
            return "No such property"
        }
      }
      if(i == contacts.length - 1)
      {
        return "No such contact";
      }
    }
    // Only change code above this line
}
  
let valor = lookUpProfile("Bob", "potato");
