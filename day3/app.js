// console.log("Starting...");
// alert("Fetching data!");
// console.log("End...");


// asynchronous JS
// console.log("Start...");
// setTimeout(()=> {
//     console.log("Fetching data..")
// }, 4000);
// console.log("End...");


const checkUserStatus = new Promise((resolve, reject) => {
    const isLoggedIn = true; // Simulate the condition
    
    setTimeout(() => {
        if (isLoggedIn) {
            resolve("User authenticated successfully!"); // Transitions to Fulfilled
        } else {
            reject("Authentication failed. Access denied."); // Transitions to Rejected
        }
    }, 1500);
});

// 2. Consuming the Promise
// console.log("Checking login status...");
// checkUserStatus
//     .then((message) => {
//         console.log("Success callback:", message); // Runs if resolved
//     })
//     .catch((error) => {
//         console.error("Error callback:", error);   // Runs if rejected
//     })
//     .finally(() => {
//         console.log("Verification check complete."); // Runs no matter what
//     });


function loadUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(user => {
            console.log("User:", user[0].name);
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user[0].id}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log("User Posts:", posts[0].title);
        })
        .catch(err => {
            console.error("Failed to load user data:", err);
        });
}

// loadUserData();

 async function loadUserData2() {
    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/2");
        if (!userResponse.ok) throw new Error("Network error");
        const user = await userResponse.json();
        console.log("User:", user.name);
        
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();
        console.log("User Posts:", posts[0]);
    } catch (err) {
        console.error("Failed to load user data:", err); // Standard catch
    }
}

// loadUserData2();

const movieSearch = document.querySelector("h1");
const title = document.querySelector(".title");
const id = document.querySelector("#movie-title");
const btn = document.querySelector("#search-btn");
// console.log(movieSearch.innerText);
movieSearch.textContent = "Ramsey";
movieSearch.style.color = "blue";
movieSearch.style.fontSize = "3rem";
movieSearch.style.backgroundColor = "green";

// console.log(id.innerText);
btn.addEventListener("click", () => {
    alert(`Searching for: nothing`);
})