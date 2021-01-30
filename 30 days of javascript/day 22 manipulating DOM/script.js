const container = document.querySelector('.wrapper');
function color(){
    const ul = document.createElement('ul');
    container.appendChild(ul);
    var inicio = 1;
    var fim = 101;
    for(var count=inicio ; count<=fim ; count++){
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      ul.appendChild(li)
      li.appendChild(h1)
      h1.textContent = count
      for(var aux=1 ; aux<=count ; aux++)
        if(count % 2 !== 0){
          li.style.backgroundColor = 'yellow';
        } else {
          li.style.backgroundColor = 'green';
        }
    }
}

color()