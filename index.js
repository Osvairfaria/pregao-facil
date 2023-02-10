// alert('Ola Gisa!!');

let nota1 = 9;
let nota2 = 9;
let nota3 = 6;
let nota4 = 3;

let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

let notaFixa = notaFinal.toFixed(0);

console.log("Sua Nota Final é = " + notaFixa);
console.log("Olá! ==> Nota Final");



function converter() {

    let valorElemento = document.getElementById("number");
    let valor = valorElemento.value;
    let valorNumerico = parseFloat(valor); // Este comando é para add valor de istring para numérico. ParseInt ou ParseFloat. ok
    let valorReal = valorNumerico * 5;
    console.log(valorReal);

    let elementoResultadoConvertido = document.getElementById("resultado");
    let resultadoConvertido = "O resultado é " + valorReal;
    elementoResultadoConvertido.innerHTML = resultadoConvertido;

};

function chutar() {
    let valor = parseInt(document.getElementById("valor").value)
}