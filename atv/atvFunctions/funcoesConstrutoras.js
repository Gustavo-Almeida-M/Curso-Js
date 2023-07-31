function Veiculo(tipo, modelo, ano)
{
    const data = new Date();
    const anoAtual = data.getFullYear();

    function calculaIdadeVeiculo()
    {
        return anoAtual - ano;
    };

    this.tipo = tipo;
    this.modelo = modelo;
    this.ano = ano;
    this.idadeVeiculo = calculaIdadeVeiculo()
}

const car = new Veiculo('Carro', 'Gol', 1998);
