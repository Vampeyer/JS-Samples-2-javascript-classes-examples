

let boxObj = {}


Object.assign(boxObj , { 1: " one"  , doit : function(){ console.log(" I am doing it ")} })

boxObj.doit()



Object.assign(boxObj , { 1: " one"  , doit : function(){ return " I am doing it "} })

console.log(boxObj.doit())