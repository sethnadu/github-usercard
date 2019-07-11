/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/







//find main location in html where date will be added
const cards = document.querySelector(".cards");

// variables for each github handle
const jonathanScott = "jondscott21";
const john = "Bigorange8801";
const leana = "leananepari";
const rosa = "paintedlbird7";
const crystal = "cmstexas";
const seth = "sethnadu";
const davinder = "davinder"

// github handle variables inside of array
const followersArray = [jonathanScott, john, leana, rosa, crystal, davinder, seth ];

// followersArray foreach over the github handle variable and apply it's corresponding information from their api
followersArray.forEach(names => {
axios.get(`https://api.github.com/users/${names}`)
  .then(data => {
   
    const img = data.data.avatar_url;
    const name = data.data.name;
    const username = data.data.login;
    const location = data.data.location;
    const address = data.data.url;
    const followersCount = data.data.followers;
    const followingCount = data.data.following;
    const bio = data.data.bio;
    // create a variable with the function below holding the variables made from each information attained from the api of each person
    const person = createGitHubCards(img, name, username, location, address, followersCount, followingCount, bio);
    cards.appendChild(person);
  });
});









/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/






//function created to make the html, apple classnames, append(nest) to the right nesting, at textcontent from api

function createGitHubCards(img, name, username, location, address, followersCount, followingCount, bio) {

const cardDiv = document.createElement("div");
const userImg = document.createElement('img');
const cardInfoDiv = document.createElement("div");
const usersName = document.createElement("h3");
const userName = document.createElement("p");
const userLocation= document.createElement("p");
const userAddress = document.createElement("p");
const userFollowers = document.createElement("p");
const userFollowing = document.createElement("p");
const userBio = document.createElement("p");

cardDiv.classList.add("card");
cardInfoDiv.classList.add("card-info");
usersName.classList.add("name");
userName.classList.add("username");

cardDiv.appendChild(userImg);
cardDiv.appendChild(cardInfoDiv);
cardInfoDiv.appendChild(usersName);
cardInfoDiv.appendChild(userName);
cardInfoDiv.appendChild(userLocation);
cardInfoDiv.appendChild(userAddress);
cardInfoDiv.appendChild(userFollowers);
cardInfoDiv.appendChild(userFollowing);
cardInfoDiv.appendChild(userBio);

userImg.src = img;
usersName.textContent = name;
userName.textContent = username;
userLocation.textContent = location;
userAddress.textContent = address;
userFollowers.textContent = followersCount;
userFollowing.textContent = followingCount;
userBio.textContent = bio;

return cardDiv;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
