
function Construction(string){ 

    this.name = string
    this.what = "chicken but  " , 
    this.taste  = " greasy S"
    this.response = function() { 
        console.log(`{ "The title is",  ${string}}`)
    }
    this.howitTastes = function(){ 
        console.log(`The  ${this.what}  tastes  ${this.taste}  `)
    }

} 
const newCO = new Construction("title thingy  ")

const sandwich = new Construction(" Da sandwhich ")


newCO.response()
sandwich.howitTastes()



let sampObj = { }

function constructin(){
sampObj.carEngine = " 3.0 L "
return console.log(sampObj)
}
constructin()



