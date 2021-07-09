console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

// pulse Check
// Q1 

let myFavoriteFood = "burger"
const favoriteFood = function () {
    return myFavoriteFood;
};

// Q2 

const updateFavoriteFood = function (newValue) {
  myFavoriteFood = newValue ;
  return myFavoriteFood ;

};


// Q3

const createCounter = function () {
 let counter = 0; // make this comment to solve Q4 

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    return ++counter;
  };
};
const counter1 =createCounter()
const counter2 = createCounter()

// Q4
const createCounter1 = function (start) {
  counter = start;
  return "count is update"
};










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
let num= 5;
const countDown= function(){
    num = num - 1
    if (num < 0){
        return "count down is over"
    }
    else{
        
        return num;
    }
}

// Q4 

const countUp= function(){
    num = num + 1
    return num
}


// Q5 

const restCount=function (start){
       num = start ;
       return "the count has been reset"
       
}

// Q6 i dont how save rturn value 

const addToList = function (toDo) {
   let newadd= toDo
   let arr=[toDo , newadd]
   return arr
   
   
};

// Q7 i dont how save rturn value 






// Q8 i dont how save return value 
const deposit = function (amount) {
       amount = amount  
     return amount ;
};


const withdraw = function (amount) {
  let newammount = amount    
      amount = newammount - amount 
      return amount
};
