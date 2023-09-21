let num1=document.querySelector("input#num1");
let num2=document.querySelector("input#num2");
let operand1=document.querySelector("button#operand1");
operand1.addEventListener("click",function(){
  document.querySelector("h2").innerHTML=
    Number(num1.value)+Number(num2.value);
});
let operand2=document.querySelector("button#operand2");
operand2.addEventListener("click",function(){
  document.querySelector("h2").innerHTML=
    Number(num1.value)-Number(num2.value);
});
let operand3=document.querySelector("button#operand3");
operand3.addEventListener("click",function(){
  document.querySelector("h2").innerHTML=
    Number(num1.value)*Number(num2.value);
});
let operand4=document.querySelector("button#operand4");
operand4.addEventListener("click",function(){
  document.querySelector("h2").innerHTML=
    Number(num1.value)/Number(num2.value);
});
