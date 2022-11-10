
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const hoverPara= document.querySelector('#hoverPara');

//form.addEventListener('click', sumarInputValues);

//function sumarInputValues(event) {
  //console.log({event});
 // event.preventDefault();
  //const sumaInputs = input1.value + input2.value;
  //pResult.innerText = "Resultado: " + sumaInputs;
//}

hoverPara.addEventListener('mouseover', respondMouseOver);

hoverPara.addEventListener('mouseout', respondMouseOut);

function respondMouseOver(event){
  hoverPara.innerHTML = "mouseover Event";
}

function respondMouseOut(event){
  hoverPara.innerHTML = "Eventos de mouse"; 
}