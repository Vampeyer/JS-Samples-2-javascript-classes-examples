const person = {
    nameobj: {
      first: "Bob",
      last: "Smith",
    },
    namearray: ['Bob' , 'Smith']
    // …
  };

  person["eyes"] = "hazel";
  person.farewell = function () {
    console.log("Bye everybody!");
  };



 console.log( person["eyes"]);
person.farewell();
// "Bye everybody!"

console.log(person)












// console.log( " I said the names   " ,  person.nameobj["first"] , "  " ,  person.nameobj["last"] )


// person.nameobj.first = " -  Vamp - "
// person.nameobj.last = " - eyer   - "

// setTimeout( ()=>{  console.log(" Not today  ....... ")  },500)
  
//     setTimeout( ()=>{ console.log(" Today the names  , ")  


// setInterval( ()=>{ 

//     setTimeout( ()=>{console.log("...") 


//      } , 1000)
//      setInterval( ()=>{ console.log(".... ", person.nameobj.first , " " , person.nameobj["last"])} , 1000)
//     } , 1000)

// } , 3000)
