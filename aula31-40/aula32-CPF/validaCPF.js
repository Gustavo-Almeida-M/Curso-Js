class validaCPF{
    constructor(cpfEnviado){
        Object.defineProperties(this, 'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
}