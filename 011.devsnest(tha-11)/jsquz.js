let score=0;
let no=1;
let quiz=[{
    Question:"Q1.What does CSS stand for? ",
    option1:"Casing Style Sheet",
    option2:"Casor Style Sheet",
    option3:"Cascading style sheets",
    option4:"color style sheets"
},{
    Question:"Q2. Which of the following properties is associated with a queue?",
    option1:' First In Last Out',
    option2:'First In First Out',
    option3:'Last In First Out',
    option4:'Last In Last Out'
},{
    Question:"Q3. Which of the following statements for a simple graph is correct?",
    option1:"Every path is a trail",
    option2:"Every trail is a path",
    option3:"Every trail is a path as well as every path is a trail",
    option4:"Path and trail have no relation"
},{
    Question:"Q4. What is the time complexity of inserting at the end in dynamic arrays?",
    option1:"O(1)",
    option2:"O(n)",
    option3:"O(logn)",
    option4:"Either O(1) or O(n)"
},{
    Question:"Q5. What is the time complexity to count the number of elements in the linked list?",
    option1:"O(1)",
    option2:"O(n)",
    option3:"O(logn)",
    option4:"O(n2)"
}];

document.getElementById('question').innerHTML=quiz[no-1].Question;
// Question.innerText=quiz[no-1].Question;

        op1.innerHTML=quiz[no-1].option1;
        op2.innerText=quiz[no-1].option2;
        op3.innerText=quiz[no-1].option3;
        op4.innerText=quiz[no-1].option4;

        const obj={
            getAns1:"Cascading style sheets",
            opNumber1:3,
            getAns2:'First In First Out',
            opNumber2:2,
            getAns3:'Every path is a trail',
            opNumber3:1,
            getAns4:'Either O(1) or O(n)',
            opNumber4:4,
            getAns5:'O(n)',
            opNumber5:2
        }      
        let colorArr=[];
let isChoosen=false;

addEventListener('click',(e)=>{
    console.log(e.target);
    if (e.target.classList.contains('op')){
        if (e.target.innerText!==obj[`getAns${no}`]){
            colorArr.push(e.target);
            e.target.style.backgroundColor="rgb(228 69 0)"
            e.target.style.color="#ebffe0"
        }
        else{
            if(!isChoosen){score+=1}
        }
        colorArr.push(document.getElementById(`op`+obj[`opNumber${no}`]));
        colorArr[colorArr.length-1].style.backgroundColor="rgb(100 175 26)";
        colorArr[colorArr.length-1].style.color="#ebffe0";
        isChoosen=true
        if (no===5){
            setTimeout(()=>{
                alert(`YOUR SCORE : ${score}/5`)
                document.location=document.location.href
            },1000)
        }
    }

    if (e.target.classList.contains('btn') && isChoosen){
        question.innerText=quiz[no].Question;
        op1.innerText=quiz[no].option1;
        op2.innerText=quiz[no].option2;
        op3.innerText=quiz[no].option3;
        op4.innerText=quiz[no].option4;
        colorArr.forEach((e)=>{
            e.style.color="black";
            e.style.backgroundColor="rgb(45, 235, 235)";
        })
        no+=1;
        console.log(no);
        isChoosen=false;
        }
        if (no===5 && e.target.classList.contains('btn')){
            setTimeout(()=>{
                e.target.style.display="none"
            },500)
        }
})