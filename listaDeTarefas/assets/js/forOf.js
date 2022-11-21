const nomes = ['Gustavo', 'Pedro', 'Olivia'];

for (let nome of nomes)
{
    console.log(nome);
}
console.log("--------------------------------------");

nomes.forEach(function(valor, index, arrayCompleto)
{
    console.log(valor, index, arrayCompleto);
});
