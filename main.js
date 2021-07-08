console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

// Practice
// Q1
let age = 25;
if (true) {
  age = 30;
}
age; // ? // a = 30 becouse we can edit on let and it is true so age = 30 

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ? // myName = "John" becouse it const and we cant edit on const 


// Q2 
let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

//func1(); // ? 15

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

//func2(26); // ? 10


// Q3 
let num= 4;
const countDown= function(){
    num = num - 1
    if (num < 0){
        return "count down is over"
    }
    else{
        
        return num;
    }
}