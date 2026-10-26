// Destructuring
// Arrray 
let arr = [1, 2, 3];
let [num1, num2, num3] = arr;

// object
let person = {
    name: "john",
    age: 22
}
let { name, age} = person;

// console.log(age);

// Declarative array methods
let items = [
    {id: 1, name: "phone", price: 1500},
    {id: 2, name: "headset", price: 200},
    {id: 3, name: "laptop", price: 3000},
];

// MAP: Transforms every item and returns a NEW array
let priceTag = items.map((item)=> `$${item.price * 2}.00`);

// FILTER: Returns a NEW array containing only items that match a condition
let expensive = items.filter((item) => item.price > 1000);

// REDUCE: Squashes an array down to a single value
let totalPrice = items.reduce((total, item) => item.price + total, 0);
// console.log(totalPrice);

let equipments = [
    {name: "clothes", price: 350, inStock: true},
    {name: "shoes", price: 200, inStock: false},
    {name: "Bag", price: 500, inStock: true}
];

// FIND: Returns the first item that matches the condition (or undefined)
let expensiveItem = equipments.find((equip) => equip.price > 200);

// SOME: Returns true if at least ONE item matches the condition
let outOfStock = equipments.some((equip) => !equip.inStock);

// console.log(outOfStock);
// if(outOfStock){
//     console.log("An item is out of stock");
// }

// EVERY: Returns true if ALL items match the condition
let allInStock = equipments.every((equip) => equip.inStock);
console.log(allInStock)