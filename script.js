window.addEventListener("load", (event) => {
  console.log("page is fully loaded");


document.getElementById("SITP1").addEventListener("mouseenter", SITP1);
document.getElementById("SITP2").addEventListener("mouseenter", SITP2);
document.getElementById("SITP3").addEventListener("mouseenter", SITP3);
document.getElementById("SITPQ").addEventListener("mouseenter", SITPQ);
document.getElementById("TBFAPQ").addEventListener("mouseenter", TBFAPQ);
document.getElementById("GOQ").addEventListener("mouseenter", GOQ);
document.getElementById("BPQ").addEventListener("mouseenter", BPQ);
document.getElementById("TCTQ").addEventListener("mouseenter", TCTQ);

function SITP1() {
  document.getElementById("SITP1").classList.add("after");
  console.log("mouse enter")
}

function SITP2() {
  document.getElementById("SITP2").classList.add("after");
  console.log("mouse enter")
}

function SITP3() {
  document.getElementById("SITP3").classList.add("after");
  console.log("mouse enter")
}

function SITPQ() {
  document.getElementById("SITPQ").classList.add("after");
  console.log("mouse enter")
}

function TBFAPQ() {
  document.getElementById("TBFAPQ").classList.add("after");
  console.log("mouse enter")
}

function GOQ() {
  document.getElementById("GOQ").classList.add("after");
  console.log("mouse enter")
}

function BPQ() {
  document.getElementById("BPQ").classList.add("after");
  console.log("mouse enter")
}

function TCTQ() {
  document.getElementById("TCTQ").classList.add("after");
  console.log("mouse enter")
}

console.log("hello world")
});

