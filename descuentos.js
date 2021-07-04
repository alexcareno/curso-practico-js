// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice").value;
    const inputDiscount = document.getElementById("inputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El resultado de tu precio con descuento es: $" + precioConDescuento;

}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
