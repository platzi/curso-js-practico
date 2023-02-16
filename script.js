const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
}
);

h1.innerText = 'Quiubo pues ome!!<br> Como fue con innerText'
h1.innerHTML = 'Quiubo pues ome!!<br> Como fue con innerHTML'

// p.getAttribute("pantalla")
// console.log(p.getAttribute('pantalla'));
// console.log(p.getAttribute('class'));
// p.setAttribute('class', 'wisp')

p.classList.add('rojo');
p.classList.remove('redDragon');
// p.classList.toggle('redDragon');
// p.classList.contains('redDragon');

input.value = "Jeison";

// document.createElement('img')
// console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://i1.wp.com/legundo.com/wp-content/uploads/2018/07/download.jpg?zoom=1.25&fit=1920%2C1080&ssl=1');
img.setAttribute('width', '200px');
img.setAttribute('height', '100px');
pid.append(img);
