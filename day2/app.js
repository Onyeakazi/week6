const h1 = document.getElementsByTagName("h1");
const title = document.getElementsByClassName("title");
const subTitle = document.getElementById("sub-title");
const para = document.querySelector(".para");
const id = document.querySelector("#id");
const p = document.querySelectorAll("p");
const whiteBtn = document.querySelector("#white")
const blackBtn = document.querySelector("#black")
const toggleBtn = document.querySelector("#toggle")
const body = document.querySelector("body");
const list = document.querySelector("#list");
const box = document.querySelector("#box");
const input = document.querySelector("#input");
const feedback = document.querySelector("#feedback");
const form = document.querySelector("form");
const formInput = document.querySelector("#form-input") 

// id.innerText = "changing the text content";
// console.log(p)
// console.log(id.innerText)
// console.log(para.textContent)
// console.log(subTitle.innerText)
// console.log(title[0].textContent)
// h1[0].innerHTML = "<i>italics</i>";
// h1[1].textContent = "just inner text";

para.style.color = "red";
para.style.backgroundColor = "blue";
para.style.padding = "20px";
para.style.margin = "10px";
para.style.borderRadius = "20px";

blackBtn.addEventListener("click", ()=>{
    body.classList.add("bg");
});

whiteBtn.addEventListener("click", ()=>{
    body.classList.remove("bg")
})

toggleBtn.addEventListener("click", ()=> {
    body.classList.toggle("bg");
});

const li = document.createElement("li");
const li2 = document.createElement("li");
const button = document.createElement("button");
const li3 = document.createElement("li");
button.textContent = "just a button";
li.textContent = "Add a list";
li2.textContent = "another list";
li3.textContent = "another list 3";
list.appendChild(li);
list.appendChild(li2);
list.prepend(button);
list.prepend(li3);

// DOM Traversal
let parentNode = blackBtn.parentElement;
let nextSibling = blackBtn.nextElementSibling;
let previousSibling = blackBtn.previousElementSibling;
// console.log(previousSibling);


box.addEventListener("mouseover", ()=>{
    box.style.transform = "scale(1.1)";
    box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", ()=>{
    box.style.transform = "scale(1)";
    box.style.backgroundColor = "red";
});

// input.addEventListener("keyup", ()=> {
//     feedback.textContent = input.value;
// })

// input.addEventListener("keydown", (e)=> {
//     feedback.textContent = e.key;
// })

// input.addEventListener("input", ()=> {
//     feedback.textContent = input.value;
// })

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let value = formInput.value;
    console.log("you typed " + value);
})