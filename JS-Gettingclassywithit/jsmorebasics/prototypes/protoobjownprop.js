

// Prototype object 
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  

  // constructor function 
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype);





const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false