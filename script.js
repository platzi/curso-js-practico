const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const bnt = document.querySelector('#btnCalcular');
const parrafo = document.getElementById('result');

function btnCalcular() {
    
    const resultado = input1.value + input2.value;
    
    parrafo.innerText = "Resultado: " + resultado;
    
}




