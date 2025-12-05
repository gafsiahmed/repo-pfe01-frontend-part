var a = undefined;


function mulipliy(variable1,variable2){
    return variable1*variable2
}

console.log(a)

// Arrow Function
let multi = (a,b)=> a*b
let power = a => a*a

// Template literals 
let firstName = "Ali"
let lastName ="Ben Salah"

console.log("Hello Mr/Ms ",firstName," ",lastName)


console.log(`Hello Mr/Ms ${firstName} ${lastName}`)


let users = ["ali","ahmed","Amine","Salma"]

let blockedUsers = [...users,"Salima","Jihen"]


let [firstUser,secondUser,...rest]= blockedUsers

console.log(blockedUsers)
console.log(firstUser, secondUser )
console.log(rest)




// firstName = "Mohamed"

// for(let i=0; i<10;i++){
//     console.log("iteration numero : ",i)

//     console.log(`Hello Mr/Ms ${firstName} ${lastName}`)
// }

// let result = addition(20,66)
// console.log(result)
let isStudent = false

if(isStudent){
  let moy = 18.6
  console.log(moy)
}else { 
    console.log("Sorry you are not a student")
}

function log(message){
    console.log('The Result is :',message)
}

function addition(a,b){
    let result = a+b
    log(result)
}
 
addition(10,30)

var a=20;


let btn = document.querySelector('.btn')

console.log(btn)

btn.addEventListener("click",()=>{
    let message = "Hey you just clicked the button"

    let messageNode = document.createTextNode(message)
    let helloTitle = document.createElement('h3')

    helloTitle.appendChild(messageNode)

    document.body.insertBefore(helloTitle,btn)
})