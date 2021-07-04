// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
   return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const BaseTriangulo = 4;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + BaseTriangulo + "cm");

// const AlturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + AlturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del circulo
console.group("Circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2
}
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("PI es: " + PI);

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del circulo es: " + circunferenciaCirculo + "cm");

function areaCirculo(radio) {
    return PI * (radio * radio);
}
// console.log("El área del circulo es: " + areaCirculo + "cm^3");

console.groupEnd();


// Aquí empezamos con el HTML
// Funciones del cuadrado 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones del triángulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo1").value;
    const input2 = document.getElementById("InputTriangulo2").value;
    const inputBase = document.getElementById("baseTriangulo").value;

    const perimetro = perimetroTriangulo(input, input2, inputBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base =  document.getElementById("baseTriangulo").value;
    const input = document.getElementById("alturaTriangulo").value;

    const area = areaTriangulo(base, input);
    alert(area);
}

// Funciones del circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("radioCirculo").value;

    const diametro = diametroCirculo(input);
    alert(diametro);
}

function calcularCircunferenciaCirculo() {
    const input = document.getElementById("radioCirculo").value;

    const circunferencia = circunferenciaCirculo(input);
    alert(circunferencia);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo").value;

    const area = areaCirculo(input);
    alert(area);
}