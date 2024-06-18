class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'




// functionally classy dev example 1   -
class Addclass { 
addnumber(num1, num2){ return num1 + num2 }
}

const number = 50 
const newaddClass = new Addclass()

console.log(newaddClass.addnumber(20, 30 ))




