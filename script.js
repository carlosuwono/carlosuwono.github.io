window.addEventListener("load", (event) => {
  console.log("page is fully loaded");


document.getElementById("trigger").addEventListener("mouseenter", blackEffect);
document.getElementById("trigger2").addEventListener("mouseenter", yellowEffect);

function blackEffect() {
  document.getElementById("cover").classList.remove("yellow");
  document.getElementById("cover").classList.add("active");
  console.log("mouse enter ")
  
}

function yellowEffect() {
  document.getElementById("cover").classList.remove("active");
  document.getElementById("cover").classList.add("yellow");
  console.log("mouse enter ")
  
}


console.log("hello world")




















});

