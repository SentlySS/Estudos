const btn = document.querySelector('button');
const fundo = document.querySelector('body');
let cores = ["blue", "red", "green", "white", "pink", "black", "grey"];

fundo.style.backgroundColor = 'violet'
function changeColor(){
  const coresIndex = parseInt(Math.random()*cores.length+1);
  fundo.style.backgroundColor = cores[coresIndex];
}
btn.addEventListener('click', changeColor);