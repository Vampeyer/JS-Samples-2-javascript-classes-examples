


let sentence  = " This is a story about a boy   "

let newSentence = sentence.replace("boy", " Girl  ")
console.log(newSentence)



let samparray =  [ "sally" , " susie " , " samantha  " ]
let array = []
let string = " "
for(const stuff in samparray){
    
    // console.log(samparray)
    // console.log(samparray[stuff])
    console.log( ` named ${samparray[stuff]}`)
    array.push(samparray[stuff])
}
console.log(" the new array is " , array)

