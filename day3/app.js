// Synchronous Code Example (Blocking)
// console.log("Start");
// alert("Good morning");
// console.log("End");


//  Asynchronous Code Example (Non-Blocking)
// console.log("start");
// setTimeout(()=> {
//     console.log("data fetched");
// }, 4000);
// console.log("End");

// const checkUserStatus = new Promise((resolve, reject) => {
//     const isLoggedIn = false; // Simulate the condition
    
//     setTimeout(() => {
//         if (isLoggedIn) {
//             resolve("User authenticated successfully!"); // Transitions to Fulfilled
//         } else {
//             reject("Authentication failed. Access denied."); // Transitions to Rejected
//         }
//     }, 1500);
// });

// 2. Consuming the Promise
console.log("Checking login status...");
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


//  Promises vs. Async/Await (Why & When to Use Which)
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
           console.log("User Post:", posts[0].title)
        })
        .catch(err => {
            console.error("Failed to load user data:", err);
        });
}

// loadUserData();

async function loadUserData() {
    try {
        const userResponse = await fetch("https://api.example.com/user");
        if (!userResponse.ok) throw new Error("Network error");
        const user = await userResponse.json();
        console.log("User:", user.name);
        
        const postsResponse = await fetch(`https://api.example.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();
        console.log("User Posts:", posts);
    } catch (err) {
        console.error("Failed to load user data:", err); // Standard catch
    }
}