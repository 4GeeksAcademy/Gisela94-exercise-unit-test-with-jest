//Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dólares
    return valueInDollar;
}


// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
};

// Declaramos la función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function (valueInDollar) {
    // Convertir de dólares a euros
    let euros = dollars / oneEuroIs.USD;  
    // Convertir de euros a yenes
    let yen = euros * oneEuroIs.JPY;      
    return yen;
}

// Convertir yenes a libras esterlinas
const fromYenToPound = function (valueInPound) {
    // Convertir de yenes a euros
    let euros = yen / oneEuroIs.JPY; 
    // Convertir de euros a libras esterlinas 
    let pounds = euros * oneEuroIs.GBP; 
    return pounds;
}

// Esta es mi función que suma dos números
const sum = (a , b) => {
  return a + b
}

//Solo un registro en consola para nosotros
console.log(sum(7,3))

//Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};