// Introducing constructors
// Using object literals is fine when you only need to create one
//  object, but if you have to create more than one, as in the
//   previous section, they're seriously inadequate. We have
//    to write out the same code for every object we create,
//     and if we want to change some properties of the object 
//     - like adding a height property - then we have to remember 
//     to update every object.

// We would like a way to define the "shape" of an object — 
// the set of methods and the properties it can have — and 
// then create as many objects as we like, just updating 
// the values for the properties that are different.

// The first version of this is just a function:.

// let name = " Jimmay  Morrison "


/// My precode  ^ 

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);

//     return obj;
//   };
  
// }
// createPerson()
// console.log(obj)

// const newDude = createPerson(" Jimmay morrison  ")
// obj.introduceSelf()

let name = "jim "




 


function createPerson(name) {
  // const obj2 = {};
  const obj3 = {};

  obj3.name = name;
  obj3.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj3;
}
const firstOne =  createPerson("lil pimping l");

const secondOne = createPerson(" Jeremy")

firstOne.introduceSelf()
secondOne.introduceSelf()
