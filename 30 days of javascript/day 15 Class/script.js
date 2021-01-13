// Exercises

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  eatingMethod(){
    console.log(`${this.name} is eating`);
  }
}

// 2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
  latir(){
    console.log(`${this.name} está latindo`);
  }
}

class Cat extends Animal{
  miar(){
    console.log(`${this.name} está miando`);
  }
}

// 3. Override the method you create in Animal class

class Bird extends Animal {
  constructor(name, age, color, legs, gender){
    super(name, age, color, legs)
    this.gender = gender;
  }
  birdMethod(){
    console.log(`${this.name} is ${this.gender}`)
  }
}

