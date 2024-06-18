

// Accessing objects through object literals  

const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.  , accessed by .this object notation`);
    },
  };
  
  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}. , accessed by .this object notation `);
    },
  };


const person3 = { 
  name: " Jimmy  " , 
  action: "cracked corn ", 
  feeling: " I dont care    ",
  personObj() {
    console.log(` ${ this.name} , ${this.action} , and   ${this.feeling}` )},
}




console.log(" hI  I am " , person1.name + " and " + person2.name)

  person1.introduceSelf()
  person2.introduceSelf()


person3.personObj()

