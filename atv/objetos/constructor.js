class Carro
{
    constructor(modelo, nPneus, tamMotor)
    {
        this.modelo = modelo
        this.nPneus = nPneus;
        this.tamMotor = tamMotor;
    }

    get print()
    {
        return ` Modelo: ${this.modelo}\n Número de pneus: ${this.nPneus}\n Tamanho do motor: ${this.tamMotor}`;
    }
}

const Picape = new Carro('picape', 4, 2.5);

console.log(Picape.print);