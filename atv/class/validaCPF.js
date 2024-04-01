class Valida
{
    constructor(cpf)
    {
        Object.defineProperty(this, 'cpfLimpo'    ,
        {
            value: cpf.replace(/\D+/g, '')
        })
    }
}


const validaCPF = new Valida('096.654.786.98');

console.log(validaCPF.cpfLimpo);

