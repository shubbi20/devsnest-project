//question 1 check if it is array or not
const isarray = element=> Array.isArray(element); 

console.log(isarray('w3resource'));
console.log(isarray([1, 2, 4, 0]));

//question 2 clone array

let clonearray= function (arr){
    let clone=[];
arr.forEach(element =>{ clone.push(element)});
    return clone;
}

console.log(clonearray([1, 2, 4, 0]));

console.log(clonearray([1, 2, [4, 0]]));

//question 3 return the first n

function first(arr){ 
    return arr[0];
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
 
//question 4 append

let appendstring= function (arr){
    let appstring="";
arr.forEach(element =>{ appstring+=element});
    return appstring;
}
console.log(appendstring( ["Red", "Green", "White", "Black"]
));

let shu= ["Red", "Green", "White", "Black"];
let str="";
shu.forEach(ele=> str+=ele);
console.log(str);


//question 5 find most frequent element

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length - arr.filter(v => v===b).length
  ).pop();
}
console.log(mode([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
