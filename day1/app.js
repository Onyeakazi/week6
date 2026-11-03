// Array destructing
const fruits = ["mango", "pear", "orange"];
const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

// Object destructing
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// console.log(person.name);
// console.log(person["age"]);

const { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers)

const updatedPerson = {...person, skills: ["html", "css", "js"], isRich: true};
// console.log(updatedPerson);

// Rest operator
function addTotal(...numbers){
    return numbers.reduce((total, number)=> number + total, 0);
}

// console.log(addTotal(1, 2, 3, 4, 5, 6));


// Declarative array methods
const products = [
    {id: 1, name: "shoes", price: 100.0},
    {id: 2, name: "phones", price: 150.0},
    {id: 3, name: "eyeglass", price: 50.0},
];

// MAP: Transforms every item and returns a NEW array
const priceTags = products.map(product => `${product.name} price is: $${product.price}.00`);
// console.log(priceTags);

// FILTER: Returns a NEW array containing only items that match a condition
const expensiveProducts = products.filter(product => product.price >= 100);
console.log(expensiveProducts);

// REDUCE: Squashes an array down to a single value
const totalPrice = products.reduce((total, product)=> product.price + total, 0);
// console.log(totalPrice);

const items = [
    { name: 'Book', price: 10, instock: true },
    { name: 'Laptop', price: 1000, instock: false },
    { name: 'Headphones', price: 100, instock: true }
];

// FIND: Returns the first item that matches the condition (or undefined)
const inStock = items.find(item => item.instock == true);
const expensive = items.find(item => item.price > 50);
// console.log(expensive);

// SOME: Returns true if at least ONE item matches the condition
const hasOutOfStock = items.some(item => !item.instock);
// console.log(hasOutOfStock);

// EVERY: Returns true if ALL items match the condition
const allInStock = items.every(item => item.instock);
// console.log(allInStock);