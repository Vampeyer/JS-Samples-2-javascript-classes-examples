////////////////////////////////

// let dateNow = new Date()

// console.log(dateNow.getTime())
// console.log(dateNow.getFullYear())
// console.log(dateNow.getMonth())
// console.log( " getdate  ",  dateNow.getDate())



// //////////////////////////////////////////////////////////////////////
// Shadowing properties
// What happens if you define a property in an object,
//  when a property with the same name is
//  defined in the object's prototype? Let's see:
// JS

// const myDate = new Date(1995, 11, 17);

// console.log(myDate.getTime()); // 819129600000

// myDate.getTime = function () {
//   console.log("something else!");
// };

// myDate.getTime(); // 'something else!'
