const URL = "https://randomuser.me/api/";

async function fetchUser(URL) {
  // fetch API , handle Erros
  const response = await fetch(URL);
  const data = await response.json();

  return data.results[0];
}

let currentUser = null; 

function UserCard({user,isShowed}) {

  console.log(isShowed)
  return (
    <div className="userCard">
      <img src={user.picture.large} />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.location.city}, {user.location.country}
      </p>
    </div>
  );
}




function App() {
  return (
    <>
      <h1>Random User Generator</h1>

      <button
        id="fetch-button"
        onClick={async () => {
          currentUser = await fetchUser(URL);
          console.log("here");
          root.render(<App />);
        }}
      >
        Fetch new user
      </button>

      {currentUser ? <UserCard user={currentUser} isShowed={true} /> : null}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
