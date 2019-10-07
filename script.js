// hier komt je code
// console.log("Hallo wereld!");
let mijnHamburger = document.querySelector("#hamburger")
let stand = "closed"
console.log(stand)
var voor = document.getElementById("voor");
var midden = document.getElementById("midden");
var achter = document.getElementById("achter");
var nav = document.getElementById("nav")
function navClick() {

  if (stand == "closed") {
    console.log("nav opent");
    stand = "open";
    console.log(stand)
    voor.classList.add("voorHamburger");
    midden.classList.add("middenHamburger");
    achter.classList.add("achterHamburger");
    nav.classList.toggle("hidden")

  } else {
    console.log("nav sluit");
    stand = "closed";
    console.log(stand)
    voor.classList.toggle("voorHamburger");
    midden.classList.toggle("middenHamburger");
    achter.classList.toggle("achterHamburger");
    nav.classList.toggle("hidden")
  }


}
mijnHamburger.addEventListener('click',navClick);
