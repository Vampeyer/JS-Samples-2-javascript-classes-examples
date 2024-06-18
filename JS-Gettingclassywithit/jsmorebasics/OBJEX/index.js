const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
    street: {
        name:"jim",
        speak() {console.log(this.name)}
    }
  };
  
myObject.greet(); // Greetings from Madrid

myObject.street.speak()

