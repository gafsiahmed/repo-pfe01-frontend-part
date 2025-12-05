console.log("Iteration1");
console.log("Iteration2");

setTimeout(() => {
  console.log("Iteration3");
}, 2000);

console.log("Iteration4");

// const myFirstPromise = new Promise((behya,khayba)=>{
//     if(mood== true){
//         behya("Heyy l mood 10/10")
//     }
//     else {
//         khayba("mood mahich haja")
//     }
// })

let moyenneBtn = document.querySelector(".moyenneBtn");
let moyenneInput = document.querySelector(".moyenne");

let resultContainer = document.querySelector(".result");

// console.log(permisPromise);

function createMessageElement(message) {
  let newElement = document.createElement("h3");
  newElement.textContent = message;

  if (message == "success") {
    newElement.classList.add("success");
  } else {
    newElement.classList.add("failure");
  }

  resultContainer.innerHTML = "";
  resultContainer.appendChild(newElement);
}

// let giftPromise = new Promise((resolve, reject) => {
//   let moyenne = moyenneInput.value;

//   if (moyenne >= 15) {
//     resolve("success");
//   } else {
//     reject("failure");
//   }
// });

moyenneBtn.addEventListener("click", () => {
  //1- we will get the data from the field

  let moyenne = moyenneInput.value;
  // we will display a message in the ui
  // RED : Sorry the promise is not fuillfied
  // BLUE : Yeaaa the promise is rsolved

  let giftPromise = new Promise((resolve, reject) => {

    if (moyenne >= 15) {
      resolve("success");
    } else {
      reject("failure");
    }
  });

  giftPromise
    .then((data) => {
      createMessageElement(data);
    })
    .catch((data) => {
      createMessageElement(data);
    });
    
});
