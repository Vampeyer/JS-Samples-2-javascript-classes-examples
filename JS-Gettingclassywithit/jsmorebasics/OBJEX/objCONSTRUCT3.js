// Constructors, by convention, start with a capital letter and are named for 
// the type of object they create. So we could rewrite our example like this:

function Person(string , numner){ 
    this.string = string 
    this.introduceString = function(){
        console.log(`The name is ${string} , `)
    }
}

// To call Person() as a constructor, we use new:

const response = new Person("Jimmy-joe" , 55)

response.introduceString()