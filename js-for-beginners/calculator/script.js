const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

buttons.forEach(function(btn){
  btn.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      output.value += value;
  })
});
equal.addEventListener('click', function(){
  if(output.value === ''){
    output.value = 'Coloque o valor';
  } else {
    let answer = eval(output.value);
    output.value = answer;
  }
})  
  clear.addEventListener('click', function(){
    output.value = '';
})
