//Uma função pra dizer se uma imagem esta em modo paisagem
function comparaTamanho(x,y)
{
    if(x > y)
    {
        console.log("A imagem está em modo paisagem!");
    }
    else
    {
        console.log("A não está em modo paisagem!");
    }
}

comparaTamanho(1080, 1080);