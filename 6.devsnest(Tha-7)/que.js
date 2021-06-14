// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = 
// { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
let arr = { name : "David Rayy", sclass : "VI", rollno : 12 };
for(let element in arr){
    console.log(element);
}


//2.delete last property(roll no)

console.log(arr);

delete arr.rollno;

console.log(arr);

//3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student =
// { name : "David Rayy", sclass : "VI", rollno : 12 }; 

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

var size = Object.keys(student).length;
console.log(size);

//4.4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the
//following books.

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

function displaybooksStatus() {
    library.forEach((value) => {
      if (value.readingStatus === true) {
        console.log("You have read this book :" + value.title);
      } else {
        console.log("You haven't read this book: " + value.title);
      }
    });
  }
 
  displaybooksStatus();
  

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a
// cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 


class Cylinder {
    constructor(height, radius) {
      this.height = height;
      this.radius = radius;
    }
    
    get volume() {
      return this.calcVol();
    }
    
    calcVol() {
      return this.height * this.radius * 2 * 3.1415;
    }
  }
  
  const cylinder = new Cylinder(10, 4);
  
  console.log(cylinder.volume.toFixed(4));

 //sort 
//   6.Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }
//   , [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
  

  var libraryy = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245,
    },
  ];

libraryy.sort( (a, b) => b.libraryID - a.libraryID );
  
console.log(libraryy);