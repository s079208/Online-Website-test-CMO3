/*document.querySelector(".button").addEventListener("click", function(){
  console.log("test click");
  document.querySelector('.vlak1').classList.toggle('vlak1ab')
  document.querySelector('.vlak2').classList.toggle('vlak2ab')
  document.querySelector('.vlak3').classList.toggle('vlak3ab')
  document.querySelector('.vlak4').classList.toggle('vlak4ab')
  document.querySelector('.vlak5').classList.toggle('vlak5ab')
  document.querySelector('.vlak6').classList.toggle('vlak6ab')
  document.querySelector('.vlak7').classList.toggle('vlak7ab')
  document.querySelector('.vlak8').classList.toggle('vlak8ab')
  document.querySelector('.vlak9').classList.toggle('vlak9ab')
  document.querySelector('.vlak10').classList.toggle('vlak10ab')
  document.querySelector('.vlak11').classList.toggle('vlak11ab')
<  document.querySelector('.button').classList.toggle('buttonab')
0
});*/

var button = document.querySelector(".button");
var myButtonElements = document.querySelectorAll('div');
var i = 0;

button.addEventListener("click", function(){
  button.classList.toggle('buttonab')
  while (i < myButtonElements.length) {
      console.log([i]);
      myButtonElements[i].classList.toggle('vlak'+[i]+'ab');
  	  i++;
  }
});
