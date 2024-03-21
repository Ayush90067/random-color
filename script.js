let btn=document.querySelector('button');

btn.addEventListener("click", function(){

  let random= Randomcolor();
  let h2=document.querySelector('h2');
  h2.innerText=random;
  let div=document.querySelector('div');
  div.style.backgroundColor=random;


});


function Randomcolor(e){
  let red=Math.floor(Math.random()*255);
  console.log(red);
  let green=Math.floor(Math.random()*255);
  console.log(green);
  let blue=Math.floor(Math.random()*255);
  console.log(blue);

  let color= `rgb(${red},${green},${blue})`;
  return color;
}

  

