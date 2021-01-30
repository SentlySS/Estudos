// 1. Declare a function fullName and it print out your full name.
function fullName(firstName = "Daniel", lastName = "Passos"){
  let full = firstName + ' ' + lastName;
  return full;
};
console.log(fullName());

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName){
  let full = firstName + ' ' + lastName;
  return full;
};

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function sum(a, b){
  let sum2 = a + b;
  return sum2;
};

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
  let area = length + width;
  return area;
};

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
  let perimeter = 2 * (length + width);
  return perimeter;
};

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
  let vol = length * width * height;
  return vol;
};

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
  let area =  Math.PI * r * r;
  return area;
};

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
  let circum = 2 * (Math.PI * r);
  return circum;
};

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function circumOfCircle(mass, volume){
  let density = mass/volume;
  return density;
};

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time){
  let speed = distance/time;
  return speed;
};

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity){
  let weight = mass/gravity;
  return weight;
};

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function temperatureOF(oC){
  let oF = (oC * 9/5) + 32;
  return oF;
};

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bodyMass(weight,height){
  let bmi = weight  / (height * height);
  if(bmi < 20){
    console.log('Você está abaixo do peso');
  } else if (bmi >= 20 && bmi <= 25){
    console.log('Você está no peso ideal');
  } else if(bmi > 25 && bmi <= 30){
    console.log('Você está na pré-obesidade');
  } else if(bmi > 30 && bmi <= 40){
    console.log('Você está obeso');
  } else {
    console.log('Você está com obesidade morbida');
  }
};

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function season(e){
  if(e == março || e == abril || e == maio || e == junho){
    console.log('Outono');
  } else if ( e == setembro || e == agosto || e == julho){
    console.log('Inverno');
  } else if(e == outubro || e == novembro|| e == dezembro){
    console.log('Primavera');
  } else if(e == janeiro || e == fevereiro){
    console.log('Verão');
  } else{
    console.log('Esse mês não existe');
  }
};

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function max(a,b,c){
  if(a > b && a > c){
    console.log(`${a} é o maior numero`)
  } else if(a < b && b > c){
    console.log(`${b} é o maior numero`);
  } else {
    console.log(`${c} é o maior numero`);
  };
};


