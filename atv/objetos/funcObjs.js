function Carro(modelo, ano, nPneus)
{
    this.modelo = modelo;
    this.ano = ano;
    this.nPneus = nPneus;
}

Carro.prototype.acelera = 'Danranranranrnanrna';

function Moto(motor)
{
    this.motor = motor;
}



const car = new Carro('Golf', 2007, 4);
const bike = new Moto(250)

const veiculos = Object.assign({}, bike, car);

Object.defineProperty(car, 'modelo',
{
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(car, 'modelo'));

console.log(car.acelera);