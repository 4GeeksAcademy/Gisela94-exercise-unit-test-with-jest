//Importar la función sum del archivo app.js
const {sum} = require ('./app.js');

//Comienza tu primera prueba 
test('ads 14 + 9 to equal 23', () => {
    //Dentro de la prueba llamamos a nuestra función sum con 2 números 
    let total = sum (14,9);

//Esperamos que la suma de esos 2 números sea 23
expect(total).toBe(23);

})

test("One euro should be 1.07 dollar", function () {
    //Importo la función desde app.js
    const {fromEuroToDollar} = require('./app.js');

    //Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    //Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    //Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("3.745 dollar should be 547.75 yenes", function () {
    //Importo la función desde app.js
    const {fromDollarToYen} = require('./app.js');

    //Uso la función como debe ser usada
    const yen = fromDollarToYen(3.745);

    //Convierto de dólares a euros 3.745 dolares son 3.5 euros, y luego de euros a yenes 3.5 * (156.5 = 547.75)
    const dollarToEuro = 3.745 / 1.07;
    const expected = dollarToEuro * 156.5;

    //Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.745)).toBe(547.75); // 3.745 dolares son 3.5 euros entonces 3.5 euros son 547.75
});

test("547.75 yenes should be 3.045 pound", function () {
    //Importo la función desde app.js
    const {fromYenToPound} = require('./app.js');

    //Uso la función como debe ser usada
    const pound = fromYenToPound(547.75);

    //Convierto de yenes a euros 547.75 yenes son 3.5 euros, y luego de euros a pound 3.5 * 0.87
    const yenToEuro = 547.75 / 156.5;
    const expected = yenToEuro * 0.87;

    //Hago mi comparación (la prueba)
    expect(fromYenToPound(547.75)).toBe(3.045); // 547.75 yenes son 3.5 euros entonces 3.5 euros son 3.045 pound
});