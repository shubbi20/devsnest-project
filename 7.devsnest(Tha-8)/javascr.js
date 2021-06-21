
// let element=document.querySelectorAll(".grid22");

// function backgroundchange(){
//     if(element.style.backgroundColor==="red"){
//         element.style.backgroundColor="";
//     }else{
//    element.style.backgroundColor="red";
// }
// }

// element.onclick=backgroundchange;

let element=document.querySelector(".container");
 element.addEventListener('click',(e)=>{
  if(e.target.classList.contains("rid")){
    e.target.classList.remove('rid');
     
  }else{
      e.target.classList.add('rid');

  }
 });
 