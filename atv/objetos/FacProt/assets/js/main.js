function Carro(modelo, ano)
{
    const prototypeAcoes = 
    {
        acelerar()
        {
            console.log('O carro está acelerando');
        }
    };
    

    return Object.create(prototypeAcoes, {
            modelo: {
                value: modelo
            },

            ano: 
            {
                value: ano
            }
        });
}

const car = Carro('Golf', 2009);

console.log(car);