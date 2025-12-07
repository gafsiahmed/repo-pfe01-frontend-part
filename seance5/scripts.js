console.log("----- code Seance 5 ----");
function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id >= 0) {
      setTimeout(() => {
        resolve({
          id: id,
          name: "Mohamed",
          lastName: "ben ali",
          age: 25,
        });
      }, 2000);
    } else {
      reject("USER NOT FOUND");
    }
  });
}

function getMessages(id) {
  return new Promise((resolve, reject) => {
    if (id >= 0) {
      setTimeout(() => {
        resolve([
          {
            sender: "Sahar Jelleli",
            content: "Hello Where is the course",
            date: Date.now(),
          },
          {
            sender: "Nour Bribech",
            content: "Good Morning !",
            date: Date.now(),
          },
          {
            sender: "Jihen Chebbi",
            content: "Can you send the session record ?",
            date: Date.now(),
          },
        ]);
      }, 3000);
    } else {
      reject("MESSAGES NOT FOUND");
    }
  });
}

// getUser(10)
// .then((user)=>{
//     console.log(user)
//     return getMessages(user.id)
// })
// .then((messages)=>{
//     console.log(messages)
//     return getNotification(true)
// })
// .then((notifications)=>{
//     console.log(notifications)
// })
// .catch((err)=>{
//     console.error("ERROR : ",err)
// })



async function onConnect(id){
    let user = await getUser(id)
    console.log(user,"from async/await")

    let messages = await getMessages(id)
    console.log(messages,"from async/await")

    let notifications = await getNotification(true)
    console.log(notifications,"from async/await")
}


// onConnect(10)



async function onLoad(id){
  try {
      let data = await Promise.all([getUser(id),getNotification(true),getMessages(id)])

      console.log(data, "Result from Promise.all() with async/await")


      let raceResult = await Promise.race([getUser(10), getMessages(10), getNotification(true)])

        console.log(raceResult, "Result from Promise.race() with async/await")

  }
  catch(err){
    console.log('ERR : ',err)
  }
}


// onLoad(20)


function getNotification(connected) {
  return new Promise((resolve, reject) => {
    if (connected) {
      setTimeout(() => {
        resolve([
          {
            from: "Salima Rekik",
            content: "Hello Where is the course",
            impressions: "120likes",
            date: Date.now(),
          },
          {
            from: "Mortadha Mannai",
            content: "Good Morning !",
            impressions: "10likes",
            date: Date.now(),
          },
          {
            from: "Sawsen Smaya",
            content: "Can you send the session record ?",
            impressions: "20likes",
            date: Date.now(),
          },
        ]);
      }, 4000);
    } else {
      reject("NOTIFICATIONS NOT FOUND");
    }
  });
}











// Promise.all([getUser(10), getMessages(10), getNotification(true)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });






// Promise.race([getUser(10), getMessages(10), getNotification(true)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const URL = `https://jsonplaceholder.typicode.com/posts`
const usersURL = `https://jsonplaceholder.typicode.com/users`

// fetch all posts from api /posts
async function getAllPosts(link){
    let response = await fetch(link)
    let data = await response.json()
    
     return data
}

// fetch all the users in the api /users
async function getAllUsers(link){
    let response = await fetch(link)
    let data = await response.json()
    
     return data
}
// fetch a post by id in the api /post/:isd
async function getPostById(link,id){
    let response = await fetch(`${link}/${id}`)
    let data = await response.json()
    
    return data
}
   

// main function to execute all the promises
async function main(){
  let [posts,post,users] = await Promise.all([getAllPosts(URL),getPostById(URL,10),getAllUsers(usersURL)])


    console.log(posts)
    console.log(post)
    console.log(users)
}





main()