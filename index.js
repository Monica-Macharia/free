// function maize(buy){
//     return console.log(buy)
// }

// maize("prices")

let maize = (buy, sell)=>{
    console.log(buy)
    console.log(sell)
}
maize("foot", "gut")

let mango=[7,3,4,5,6,7,8,9]
let mangos= mango.push(999)
console.log(mangos)


let cat =[4,4,4,2,2,2,4,5,6,6]

function looper(){
    for(let pet of cat){
        if (pet === 5)
            return console.log(pet)
        else{
            return console.log("none")
        }
    }
}
looper()


let fruits = ["mango", "gog", "lmao"]

function

// let finder = function () {fruits.find((single) => {
//    if(single === "gog"){
//        console.log("piper")
//    }else{
//        console.log("pass")
//    }
// })}
// console.log(finder())
let caps=fruits.map((uno) => uno.toUpperCase() )
console.log(caps)

function namer(){
    for( let i=0; i < 3; i++){
       if(fruits[i] === "gog"){
           console.log("yes")
       }else{
           console.log("no")
       }
    }
}
namer()


cat= {me:3,
    mo:4,
    mi:47}


function obj(){
    for(let one in cat){
        console.log(cat[one])
        if(cat[one] === 4){
            console.log("hurray")
        }else{
            console.log("uno")
        }
    }
}
obj()