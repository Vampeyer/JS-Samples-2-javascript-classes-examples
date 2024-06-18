

// Classes and constructors
// You can declare a class using the class keyword. Here's 
// a class declaration for our Person from the previous article:
// New  class object. 
class Person { 
    name; response; 


constructor(name ,){ 
    this.name = name 
    this.response = " Hello there , its nice to meet you. "

}

doSomething(){ 
    console.log(` ${this.response} ${this.name} `)
}

}



// Creating a class out of the object 


const greeting = new Person("Billy bob  ")
greeting.doSomething()




// Omitting constructors
// If you don't need to do any special initialization, you can omit
//  the constructor, and a default constructor will be generated for you:

