let user_name = "Ahmed Gafsi";

const company_name = "OpusLab";

let isLogged = true;

let user_salary = 2500;

console.log(typeof user_name);
console.log(typeof user_salary);

let user = {
  user_name: "Ahmed",
  user_last_name: "Gafsi",
  user_age: 26,
  user_hobbies: ["Football", "Reading", "Coding"],
};

console.log(typeof user);

let welcome_message = `Hello mr/ms ${user.user_name} ${user.user_last_name}, your age is ${user.age} and your hobbies are ${user.user_hobbies[0]}, ${user.user_hobbies[1]}, ${user.user_hobbies[2]}`;

console.log(welcome_message);

let users = ["Ahmed Gafsi","Ali Mekni","Mohsen Ayari", "Salma Ben Abdalah","Salah ben Ali"]

console.log(users.length, "the length of the array")
console.log(users[0])

users.push("Sahar Jleli")
console.log(users)
let removed1 = users.pop()
console.log(removed1)
console.log(users)
let removed_user = users.shift()

console.log(removed_user)
console.log(users)

users.unshift("Mortadha Maamri")
console.log(users)


let users_string = users.join(",")

console.log("Say hi to our new users ",users_string)


let new_users = users.slice(0,2)

console.log(new_users)

console.log(users)
users.splice(0,2,"Marwa Rokbani", "Nour Bribech")
console.log(users.includes("Nour Bribech"))

console.log(users.sort())

console.log(users.reverse())
users.forEach(function(user){
    console.log('Hello Dear user',user,user.length)
})


console.log(users[0].split(' '))
console.log(users[0].slice(-1))


// ecrire un code pour detecter si une chaine de caractere est palidrome ou pas 
// NB : deal with uppercase and spaces
// "Esope reste ici et se repose" est palidrome

" The man is djk "
"ljd si nam eht"

"maram"
"radar"


function checkForPalidrome(chaine){
    // Code a executer 
    let clean = chaine.trim().toLowerCase().split(' ').join('').split('').reverse().join('')

    let cleanChaine = chaine.trim().toLowerCase().split(' ').join('').split('').join('')

    return clean === cleanChaine
}


let now = new Date(1762685964694)


let moyenne = 15.36
moyenne += 2 // moyenne = moyenne + 2
moyenne++ // moyenne = moyenne + 1


let operation = false+"2"

console.log(operation , 'type :',typeof(operation))

//   or : ||  And : && 
console.log(now)





let array1 = [1,2,3,4]
let array2 = [5,6,7,8]





let [first,second, ...rest]=array1



let [firstUser,secondUser,thirdUser,...leb9eya] = users


console.log(leb9eya)
console.log(firstUser,secondUser,thirdUser)


let palidrome_chaine = "Esope   reste ici et se repose"

let arrayOfLetters = []

for(let i=0;i<palidrome_chaine.length;i++){
   if(palidrome_chaine[i] != " "){
     arrayOfLetters.unshift(palidrome_chaine[i])
   }
}


for(let user of users) {
    console.log(user)
}

for (let key in user) {
    console.log(user[key])
}
console.log(arrayOfLetters)


if(Infinity){
    console.log("Hello its is true")
}
else {
    console.log("its false")
}


let day = 3;
switch (day) {
 case 1:
 console.log("Monday");
 break;
 case 2:
 console.log("Tuesday");
 break;
 case 3:
 console.log("Wednesday");
 break;
 default:
 console.log("Other day");
}




let isMarried = false
let isStudent = false

if (isMarried && isStudent) {
    console.log("Discount 10%")
}
else if (!isMarried && isStudent){
    console.log("Discount 40%")
}
else if(!isMarried && !isStudent){
    console.log("Discount 60%")
}


(isMarried && isStudent) ?  console.log("Discount 10%") : (!isMarried && isStudent) ? console.log("Discount 40%") : (!isMarried && !isStudent) ? console.log("Discount 60%") : console.log("Discount 100%")



console.log(document.body.childNodes)




let title = document.getElementById('title')

let paragraphes = document.getElementsByClassName('paragraph')

let parag = document.getElementsByTagName('p')



console.log(parag)
console.log(paragraphes[1])
console.log(title)


title.innerHTML = "<i>Ya Sahar Fi9</i>"


title.classList.remove('sahar')





let newParagraphe  = document.createElement("p")

newParagraphe.textContent= "Heyyy Kamalna Seance lyoum"

newParagraphe.classList.add('sahar')

document.body.insertBefore(newParagraphe,paragraphes[0])






console.log(newParagraphe)




let lightBtn = document.querySelector('.btn')


lightBtn.addEventListener("click",function(){

    document.body.classList.toggle('lightMode')

})