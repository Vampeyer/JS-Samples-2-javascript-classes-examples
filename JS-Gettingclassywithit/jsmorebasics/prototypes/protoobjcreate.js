// Using Object.create
// The Object.create() method creates a
//  new object and allows you to specify an
//   object that will be used as the new 
//   object's prototype.

// Here's an example:

const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!

