const contador = document.querySelector('span');
const low = document.querySelector('.low');
const add = document.querySelector('.add');

let counter = 0;

function minus(){
   counter--;
  contador.textContent = counter;
}

function more(){
  counter++;
 contador.textContent = counter;
}
low.addEventListener('click', minus);
add.addEventListener('click', more);