let drake = dragula([document.querySelector('.nouns'), document.querySelector('.poem'),document.querySelector('.adjectives'),document.querySelector('.articles'),document.querySelector('.punctuationMarks ')]);

drake.on("dragend", function() {
	let myParagraphs = document.querySelector(".poem").querySelectorAll("p");
	let myString = "";
	let nameCapitalized;
	let i = 0;
	while (i < myParagraphs.length) {
		if (myParagraphs[i].className === "input") {
			myString += " " + myParagraphs[i].querySelector("select").value + " ";
		} else {
			myString += myParagraphs[i].innerHTML + " ";
		}
		i++;
	}
	nameCapitalized = myString.charAt(0).toUpperCase() + myString.slice(1) + "."
	document.querySelector("h2").innerHTML = nameCapitalized;
});

/*----------------fixed header-------------*/
window.onscroll = function() {myFunction()};
var header = document.querySelector('h2');
var hadrie = document.querySelectorAll('h3');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
		hadrie[0].classList.add("paddingh3");
  } else {
    header.classList.remove("sticky");
		hadrie[0].classList.remove("paddingh3");
  }
}

/*----------------fixed header-------------*/
