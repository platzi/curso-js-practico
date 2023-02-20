const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.getElementById('result');
const form = document.querySelector('#form');

form.addEventListener('submit', btnCalcular)

function btnCalcular(event) {
    const resultado = input1.value + input2.value;
    event.preventDefault()
    parrafo.innerText = "Resultado: " + resultado;
    
}





