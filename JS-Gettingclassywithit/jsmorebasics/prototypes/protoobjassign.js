
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
  // or
  // Person.prototype.greet = personPrototype.greet;

console.log(Person("Jim ").greet())





// Own properties
// The objects we create using the Person constructor above have two properties:

// a name property, which is set in the constructor, so it appears directly on Person objects
// a greet() method, which is set in the prototype.
// It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor. That's because methods are usually the same for every object we create, while we often want each object to have its own value for its data properties (just as here where every person has a different name).

// Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static Object.hasOwn() method:

// JS
