const lado1 = 3;
const lado2 = 3;
const base = 4;

function calcularAltura(lado1, lado2, base) {
    if((lado1 == lado2 ) && (base != (lado1 && lado2))) {
        let altura = Math.sqrt((lado1 ** 2) - ((base**2) / 4));
        console.log(`Este es un triángulo isoceles y su altura es de: ${altura} cm`);
    } else {
        console.log("Este no es un triángulo isoceles, vuelve a intentar");
    }
}

calcularAltura(lado1, lado2, base);