const user = { name: "Alice", role: "Admin", city: "London" };

// ES6 Destructuring (Industry Standard)
const { name, role } = user;
// console.log(`Welcome ${name}, your role is ${role}`);
// console.log(`Welcome ${user.name}, your role is ${user.role}`);

// Array Destructuring
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
// console.log(green); // 128
// console.log(rgb[2])

// Spread operator
let fruits = ["orange", "mango", "pear"];
let fruitsUpdated = [...fruits, "paw-paw", "gauva", "lemon"];

let num = [1, 2, 3]
let numUpdated = [...num, 4, 5, 6];



let person = {name: "John", age: 30};

let personUpdated = {...person, city: "imo state"};


// SECTION 2 — DECLARATIVE ARRAY METHODS
const cart = [ 
    {id: 1, price: 50}, 
    {id: 2, price: 150}, 
    {id: 3, price: 20} 
];

// MAP: Transforms every item and returns a NEW array
const priceTags = cart.map(item => `$${item.price * 2}.00`); 
// ["$50.00", "$150.00", "$20.00"]

// FILTER: Returns a NEW array containing only items that match a condition
const expensiveItems = cart.filter(item => item.price > 100);
// [{id: 2, price: 150}]

// REDUCE: Squashes an array down to a single value
const totalCost = cart.reduce((total, item) => total + item.price, 0);
// console.log(totalCost);


const items = [
    { name: 'Book', price: 10, instock: true },
    { name: 'Laptop', price: 1000, instock: false },
    { name: 'Headphones', price: 100, instock: true }
];

// FIND: Returns the first item that matches the condition (or undefined)
const foundItem = items.find(item => item.price > 50);
// console.log(foundItem.name); // 

// SOME: Returns true if at least ONE item matches the condition
const hasOutofStock = items.some(item => !item.instock);
// console.log(hasOutofStock); // true


// EVERY: Returns true if ALL items match the condition
const allInStock = items.every(item => item.instock);
// console.log(allInStock); 

