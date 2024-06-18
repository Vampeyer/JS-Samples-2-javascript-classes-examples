class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      return ` ${this.name} , `;
    }
  }

//   The constructor is defined using the constructor keyword. Just like a constructor outside a class definition, it will:

//   create a new object
//   bind this to the new object, so you can refer to this in your constructor code
//   run the code in the constructor
//   return the new object.
//   Given the class declaration code above, you can create and use a new Person instance like this:

const response = " Hello there ,  my name is "
const aClass = new Person(" Jacob ")
 console.log((response) + aClass.introduceSelf() + " Its nice to finally meet you  !  ")






 setInterval(()=>{
 // And again , to show ho wclassy  I really am . 
const namey = aClass.introduceSelf()

 console.log(" Its nice to finally meet you  !  " ,response , namey , "I am a functional /  classy dev !  " )
} ,3000)