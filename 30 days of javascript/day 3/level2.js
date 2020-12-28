//Exercise level 2

//1

let base = prompt('Insira base');
let height = prompt('Insira altura');
let area = 0.5 * base * height;

document.write(`A area do triangulo é ${area}`);
//2
let a = prompt('Insira area a');
let b = prompt('Insira area b');
let c = prompt('Insira area c');
let perimeter = a + b + c;

document.write(`O perimetro é ${perimeter}`);

//3
let length = prompt('Insira length');
let width = prompt('Insira width');
let areaRetan = length * width;
document.write(`A area do retangulo é ${areaRetan}`);
let perimeterRetan = 2 * (length + width);
document.write(`o perimetro do retangulo é ${perimeterRetan}`);

//4
let radius = prompt('Insira o raio');
let pir = 3.14;
let areaCircle = pir * radius * radius;
let circumferenceCircle = 2 *  pir * radius;

document.write(`A area do circulo é ${areaCircle}`);
document.write(`A circunferencia do circulo é ${circumferenceCircle}`);

//5
let x = 4;
let yIntercept = 2*x - 2;

//6
let y2 = 2, y1 =2;
let x2 = 6, x1 = 10;
let slope = (y2-y1)/(x2-x1);

//7
