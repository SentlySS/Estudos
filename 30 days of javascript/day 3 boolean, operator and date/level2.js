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
console.log(yIntercept > slope)

//8
let x = -3;
let y = x^2 + 6*x + 9;
console.log(y)

//9
let rateHour = prompt('Insira a taxa por hora');
let hours2 = prompt('Insira as horas que quer contar');
let calculus = rateHour * hours2;
alert(`Você ganha ${calculus}`);

//10
let name1 = prompt('Insira seu nome para verificar a largura');
let nameLength = name1.length;
nameLength > 7 ? 'Seu nome é longo' : 'Seu nome é curto';

//11
let firstName3 = 'Asabeneh';
let lastName3 = 'Yetayeh';

firstName3.length > lastName3.length ? 'Seu primeiro nome é maior que o da familia' : 'Seu nome de familia é maior que seu nome';

//12
let myAge3 = 250;
let yourAge3 = 25;

let oldest1 = myAge3 - yourAge3;
let oldest2 = yourAge3 - myAge3;

myAge3 > yourAge3 ? `Eu sou ${oldest1} anos mais velho que você` : `Eu sou ${oldest2} anos mais novo que você`;

//13
const newYear = new Date();
const actualYear = newYear.getFullYear();
let born = prompt('Insira o ano que nasceu no formato 2000');
const verify1 = actualYear - born;

verify1 >= 18 ? `You are ${verify1}. You are old enough to drive.`: `You are ${verify1}. You will be allowed to drive after 3 years.`;

//14
const actualYear2 = prompt('Insira quantos anos você viveu');
const sec = actualYear2 * 31536000;
console.log(`Você viveu ${sec} segundos`);

//15
const nowdate = new Date();
const nowYear = nowdate.getFullYear();
const nowMonth = nowdate.getMonth();
const nowDay = nowdate.getDate();

console.log(`${nowYear}-${nowMonth}-${nowDay}`);
console.log(`${nowDay}-${nowMonth}-${nowYear}`);
console.log(`${nowDay}/${nowMonth}/${nowYear}`);