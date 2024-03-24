const outputHTML = document.querySelector('.output');
const buttons = document.querySelectorAll('button');
const resultHTML = document.querySelector('.result')
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', calculate)
}
function calculate(){
   const buttonText = this.innerHTML;
   if(buttonText !== 'DEL' && buttonText !== 'AC' && buttonText !== '='){
     outputHTML.innerHTML += this.innerHTML
   }
   if(buttonText === 'AC'){
     outputHTML.innerHTML = ""
     resultHTML.innerHTML = 0
   }
  if(buttonText === "DEL"){
    outputHTML.innerHTML = outputHTML.innerText.slice(0,-1)
  }
  if(buttonText === "="){
    resultHTML.innerHTML = eval(outputHTML.innerText)
    outputHTML.innerHTML = ""
  }
}
