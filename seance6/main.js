const URL = "https://randomuser.me/api/";

import renderUserCard from "./lib/renderUserCard.js";
import createUserCard from "./lib/createUserCard.js";
import fetchUser from "./lib/fetchUser.js";

document.querySelector("#fetch-button").addEventListener("click", async () => {
  const user = await fetchUser(URL);
  const usercard = createUserCard(user);
  renderUserCard(usercard);
})



async function onLoad () {
  const user = await fetchUser(URL);
  const usercard = createUserCard(user);
  renderUserCard(usercard);
}

onLoad()
