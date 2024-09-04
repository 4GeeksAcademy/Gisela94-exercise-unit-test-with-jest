//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
}

//Solo un registro en consola para nosotros
console.log(sum(7,3))

//Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
//----------------------

//Declarar las equivalencias
//One euro is:
let oneEuroIs = {
    "JPY": 156.5, //JAPAN YEN
    "USD": 1.07, // US DOLLAR
    "GBP": 0.87, // BRITISH POUND
}

//Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    //Convertimos el valor de dólares a euro
    let dollarToEuro = valueInDollar / 1.07;
    //Convertimos el valor de euro a Yen
    let valueInYen = dollarToEuro * 156.5; 
    //Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    //Convertimos el valor de yenes a euro
    let yenToEuro = valueInYen / 156.5;
    //Convertimos el valor de euro a pound
    let valueInPound = yenToEuro * 0.87; 
    //Retornamos el valor en pound
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};