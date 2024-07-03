class Person {
    constructor(name = "Anonymous") {
      this.name = name;
    }
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person = new Person();
  person.introduce(); // Hello, my name is Anonymous