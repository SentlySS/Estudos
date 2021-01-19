// Exercise

// 1. Create a closure which has one inner function
function one(){
  let count = 0;
  function two(){
    count--;
    return count;
  }
  return two;
}

const functionClosure = one();

// 2. Create a closure which has three inner functions
function closure(){
  let count1 = 0;
  function partOne(){
    count1++;
    return count;
  }
  function partTwo(){
    count++;
    return count;
  }
  function partThree(){
    count++;
    return count;
  }
  return{
    partOne:partOne(),
    partTwo:partTwo(),
    partThree:partThree()

  }
}

const megaFunction = closure();