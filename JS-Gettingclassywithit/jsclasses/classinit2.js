
// Omitting constructors
// If you don't need to do any special initialization, you can omit 
// the constructor, and a default constructor will be generated for you:

const activity = " smoke a lot  "
const sativa = " Sativa weed" 
const indica = " indica weed "


class Pothead { 
    allTheTime(){ 
        console.log(" All this guy ever does is " , activity)
    } 
}


class hypePothead extends Pothead { 
    typeToSmoke(){ console.log(sativa)}
}


class chillPotHead extends Pothead { 
    typeToSmoke(){ console.log(indica) }
}




const dude = new Pothead()
dude.allTheTime()

const potheadOnUpper = new hypePothead()
const potHeadonDowner = new chillPotHead()


potheadOnUpper.allTheTime()


potheadOnUpper.typeToSmoke() 
potHeadonDowner.typeToSmoke()



