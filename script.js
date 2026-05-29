window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

window.onload = stopWatch()

document.getElementById("SITP1").addEventListener("mouseenter", SITP1);
document.getElementById("SITP2").addEventListener("mouseenter", SITP2);
document.getElementById("SITP3").addEventListener("mouseenter", SITP3);
document.getElementById("SITPQ").addEventListener("mouseenter", SITPQ);
document.getElementById("TBFAPQ").addEventListener("mouseenter", TBFAPQ);
document.getElementById("GOQ").addEventListener("mouseenter", GOQ);
document.getElementById("BPQ").addEventListener("mouseenter", BPQ);
document.getElementById("TCTQ").addEventListener("mouseenter", TCTQ);

function stopWatch() {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout(stopWatch, 10);
    }


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

