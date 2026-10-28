const h1 = document.getElementsByTagName("h1");
const title = document.getElementById("title");
const subTitle = document.querySelector(".sub-title");
const sub = document.getElementsByClassName("sub-title")
const btnWhite = document.querySelector(".btn-white")
const btnBlack = document.querySelector(".btn-black")
const btnToggle = document.querySelector(".btn-toggle")
const body = document.querySelector("body");


subTitle.textContent = "Kosi";
subTitle.innerHTML = "<i>this is italics</i>";

subTitle.style.backgroundColor = "red";
subTitle.style.color = "white";
subTitle.style.borderRadius = "20px";
subTitle.style.padding = "10px";

btnBlack.addEventListener("click", function(){
    body.classList.add("bg");
})

btnWhite.addEventListener("click", function(){
    body.classList.remove("bg");
})

btnToggle.addEventListener("click", function(){
    body.classList.toggle("bg");
});

const p = document.createElement("p");
p.textContent = "This is a paragraph";
body.appendChild(p);
body.prepend(p);

// Dom traversal
const parent = btnBlack.parentElement;
const nextSibling = btnBlack.nextElementSibling;
const previousSibling = btnBlack.previousElementSibling;
// console.log(previousSibling);

const box = document.querySelector("#box");
box.addEventListener("mouseover", function(){
    box.style.transform = "scale(1.1)";
    box.style.backgroundColor = "green";
})

box.addEventListener("mouseout", function(){
    box.style.transform = "scale(1)";
    box.style.backgroundColor = "red";
});

const input = document.querySelector(".input")
const feedBack = document.querySelector(".feedback")

input.addEventListener("input", (e) => {
    feedBack.textContent = e.target.value;
    // console.log(e.target.value);
});

const form = document.querySelector("#form");
const input1 = document.querySelector(".input1")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = input1.value;
    if(value == "") {
        alert("Please fill the field!");
        return;
    }
    console.log("you typed " + value)
})