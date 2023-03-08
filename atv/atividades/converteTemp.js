// Only change code below this line
class Thermostat
{
    constructor(temperatura)
    {
        this._temperatura = temperatura;
    }
    get temperature()
    {
        return this._temperatura = 5/9 * (this._temperatura - 32);
    }
    set temperature(updateTemperatura)
    {
        return this._temperatura = updateTemperatura * 9/5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);