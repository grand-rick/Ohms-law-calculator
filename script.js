// Calculating Voltage
var VOLTAGE = document.getElementById("VOLTAGE");
VOLTAGE.addEventListener("click", voltage);

function voltage() {
    var current1 = document.getElementById("current1").value;
    var resist1 = document.getElementById("resist1").value;
    var volt = document.getElementById("volt");

    current1 = Number(current1);
    resist1 = Number(resist1);

    var answer = current1 * resist1;
    volt.innerHTML = answer;
}

// Calculating Current
var CURRENT = document.getElementById("CURRENT");
CURRENT.addEventListener("click", current);
function current() {
    var voltage2 = document.getElementById("voltage2").value;
    var resist2 = document.getElementById("resist2").value;
    var curr = document.getElementById("curr");

    voltage2 = Number(voltage2);
    resist2 = Number(resist2);

    var answer = voltage2 / resist2;
    curr.innerHTML = answer;
}

// Calculating Resistance;
var RESISTANCE = document.getElementById("RESISTANCE");
RESISTANCE.addEventListener("click", resistance);
function resistance() {
    var volt3 = document.getElementById("volt3").value;
    var current3 = document.getElementById("current3").value;
    var resist = document.getElementById("resist");

    volt3 = Number(volt3);
    current3 = Number(current3);

    var answer = volt3 / current3;

    resist.innerHTML = answer;
}

// Voltage Clear Button 
let clrV = document.querySelector(".clrV");
clrV.addEventListener("click", clear1);

function clear1() {
    volt.innerHTML = 0;
    document.getElementById('current1').value = '';
    document.getElementById('resist1').value = '';
}

// Current Clear Button 
let clrI = document.querySelector(".clrI");
clrI.addEventListener("click", clear2);

function clear2() {
    curr.innerHTML = 0;
    document.getElementById('voltage2').value = '';
    document.getElementById('resist2').value = '';
}

// Resistance Clear Button 
let clrR = document.querySelector(".clrR");
clrR.addEventListener("click", clear3);

function clear3() {
    resist.innerHTML = 0;
    document.getElementById('volt3').value = '';
    document.getElementById('current3').value = '';
}

// JavaScript Media Query to add HTML to the Calculate button upon resizing below 672px
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("V").innerHTML = "Calculate";
      document.getElementById("I").innerHTML = "Calculate";
      document.getElementById("R").innerHTML = "Calculate";
    } else {
     document.getElementById("V").innerHTML = "Calculate Voltage";
     document.getElementById("I").innerHTML = "Calculate Current";
     document.getElementById("R").innerHTML = "Calculate Resistance";
    }
  }
  
  var x = window.matchMedia("(min-width: 672px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener("change",myFunction) // Attach event listener function on state changes




