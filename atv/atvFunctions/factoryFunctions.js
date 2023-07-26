function pessoa(nome, sobrenome, idade)
{
    return {
        nome,
        sobrenome,
        idade,

        get nomeCompleto()
        {
            return `${this.nome} ${this.sobrenome}` 
        },

        set nomeCompleto(valor)
        {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join()
        }
    };
}

const p1 = pessoa('Gustavo', 'Almeida', 19);
p1.nomeCompleto = 'Felipe Cababom';

console.log(p1.nomeCompleto);




