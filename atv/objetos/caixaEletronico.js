function Caixa( agencia, conta, saldo)
{
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

function CC(agencia, conta, saldo, limite)
{
    Caixa.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Caixa.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor)
{
    if(valor > (this.saldo + this.limite))
    {
        console.log('Valor invalido, o seu limite é:');
        console.log(this.verSaldo());
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Caixa.prototype.sacar = function(valor)
{
    if(valor > this.saldo)
    {
        console.log('Valor invalido, o seu limite é:');
        console.log(this.verSaldo());
        return;
    }
    this.saldo -= valor;
}
Caixa.prototype.depositar = function(valor)
{
    this.saldo += valor;
    console.log(this.saldo);
}
Caixa.prototype.verSaldo = function()
{
    return this.saldo;
}

const cc = new Caixa(1, 1, 1 , 200);

console.log(cc.verSaldo());
