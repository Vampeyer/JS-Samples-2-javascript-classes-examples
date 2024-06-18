const personPrototype = {
    greet() {
      console.log("hello!");
    },
    name: "Carl, "
  };
  
  const carl = Object.create(personPrototype);


  console.log(carl)
  carl.greet(); // hello!

  console.log(carl.name) // display some properties in the object 


// Deleting the newly created object .  
delete carl 
console.log(carl , " No more obj ")

let Person = { }

const reuben = new Person("Reuben");
reuben.greet(); 


// Create another object , using the object above , and 
// extending it by setting a prototype off of it  . 
let whatclass = Object.create(personPrototype)
  console.log( " Setting another prototype  " ,  whatclass.name)