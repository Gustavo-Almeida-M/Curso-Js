function Produto(nome, preco, id)
{

    Object.defineProperties(this, 
    {
        nome:
        {
            value: nome,
            writable: true,
            enumerable: true,
            configurable: false
        },

        preco:
        {
            value: preco,
            writable: true,
            configurable: false,
            enumerable: true
        },

        id: 
        {
            value: id,
            enumerable: true,
            writable: false,
            configurable: false
        }

    });
}

const pro1 = new Produto('Garrafa', 20, 1);

delete pro1.id;

console.log(pro1);