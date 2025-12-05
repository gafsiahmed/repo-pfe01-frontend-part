console.log("---- Seance 4 ----");

// let moyenne = 10

// const promise = new Promise((resolve, reject) => {
//   if (moyenne >= 15 && moyenne <= 20) {
//     setTimeout(() => {
//       resolve("Mabrouk , am proud , i'll buy you the pc");
//     }, 1000);
//   } else {
//     reject("Khsara l marra jeya");
//   }
// });

// promise
//   .then((jaweb) => {
//     console.log(jaweb);
//   })
//   .catch((rafdh) => {
//     console.log(rafdh);
//   });

// formulaire
let form = document.querySelector(".moyForm");
let moyenneInput = document.querySelector("#moyenne");
let resultContainer = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let moyenne = parseFloat(moyenneInput.value);

  const promise = new Promise((resolve, reject) => {
    if (moyenne >= 15 && moyenne <= 20) {
      setTimeout(() => {
        resolve("Mabrouk , am proud , i'll buy you the pc");
      }, 1000);
    } else {
      reject("Khsara l marra jeya");
    }
  });

  promise
    .then((message) => {
      //   console.log(message);
      resultContainer.innerHTML = `<h3 class="success">
        ${message}
    </h3>`;
    })
    .catch((error) => {
      //   console.log(error);
      resultContainer.innerHTML = `<h3 class="failure">
        ${error}
    </h3>`;
    });
});

let isFlousiAndek = false;

let zidStanna = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Zid stanna jem3tin okhrin");
  }, 2000);
});

let flousiWin = new Promise((res, rej) => {
  if (isFlousiAndek == false) {
    res("Lahtha taw narja3lek");
  } else {
    rej("manich medlek flousek");
  }
});

flousiWin
  .then((message) => {
    console.log(message);
    return zidStanna;
  })
  .then((message2) => {
    console.log(message2);
  })
  .catch((error) => {
    console.log(error);
  });

function getUser(id) {
  let promise = new Promise((resolve, reject) => {
    if (id > 0) {
      setTimeout(() => {
        resolve({
          id: 1,
          userName: "Ali",
          userEmail: "ali@example.com",
        });
      }, 2000);
    } else {
      reject("USER NOT FOUND");
    }
  });

  return promise;
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    if (userId > 0) {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            content: "Hello Am thrild to announce that i visited opuslab",
            userId: 1,
          },
          {
            id: 2,
            content:
              "Hello Am thrild to announce that i got my Fullstack dev certificat",
            userId: 1,
          },
        ]);
      }, 2000);
    } else {
      reject("POSTS NOT FOUND");
    }
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    if (postId > 0) {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            content: "Heyy Congraats 🎉",
            userId: 1,
          },
          {
            id: 2,
            content: "Félicitation , tu merite 🎉",
            userId: 2,
          },
        ]);
      }, 2000);
    } else {
      reject("COMMENTS NOT FOUND");
    }
  });
}

getUser(1)
  .then((user) => {
    console.log(user, "user data");
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts, "user posts");
    // console.log(posts.id)
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log(" fetching operation is done ✅");
  });

// async function login(id) {}

// login(1);

(async function (id) {
  try{
    let user = await getUser(id);
    let posts = await getPosts(user.id);
    let comments = await getComments(posts[0].id);

    console.log(`
            ------ welcome mr/ms ${user.userName}-------- 
            -------- logged user email : ${user.userEmail}-------


            Posts
            -------------------------
            ** ${posts[0].content} **
            author : ${posts[0].id}
            -------------------------
            ** ${posts[1].content} **
            author : ${posts[1].id}

            Comments : 
            -------------------------
            ${comments[0].content}
            --------------------------
            ${comments[1].content}   
            `);
  }
  catch(ERR){
    console.log("ERROR : ", ERR)
  }
})(-20);




Promise.all([getUser(1), getComments(1), getPosts(1)]).then((data) => {
  console.log(data, "From promise all");
});



fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    return data.json()
})
.then((data)=>{
 console.log(data)
})