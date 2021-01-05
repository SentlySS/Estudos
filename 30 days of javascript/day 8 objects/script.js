//Exercise Level 1

// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Rufus';
dog.legs = 4;
dog.color = 'blue';
dog.age = 6;
dog.bark = function(){
  return 'Woof Woof';
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

// 5. Set new properties the dog object: breed, getDogInfo
dog.getDogInfo = function(){
  return `O ${this.name} precisa de uma namorada`;
};
dog.getDogInfo = function(){
  return `o nome do cachorro é ${this.name}, tem ${this.legs} patas, sua cor é ${this.color} e sua idade é ${this.age}`;
};

