let no=0;
let element=document.querySelector(".container");
element.addEventListener('click',(e)=>{
 if(e.target.classList.contains("change")){
   e.target.classList.remove('change');
    no--;
    }else{
     e.target.classList.add('change');
    no++;
 }
 document.getElementById('box1').innerHTML=no;
 document.getElementById('box2').innerHTML=36-no; 

});
