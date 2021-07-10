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

/*const createCounter = function () {
 let counter = 0; // make this comment to solve Q4 

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    return ++counter;
  };
};
const counter1 =createCounter()
const counter2 = createCounter()
*/
// Q4
const createCounter1 = function (start) {
  let counter = start; 
  
  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    counter = counter + 1 
    return counter;
  };
};

 const counter4= createCounter1(5) 

// const createCounter1 = function () {
 
//   let start = 0; 
//   return function (start) {
//     count
  
//     counter = counter + 1 
//     return counter;
//   };
// };

// const counter4= createCounter1() 







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

// Q6 
let newadd =" "
const addToList = function (toDo) {
  newadd = newadd + " " + toDo;
  return  newadd
     
   
};


// Q7 
const createToDoList = function () {
     let newadd = ""

     return function (toDo){
       newadd = newadd + " " + toDo 
       return newadd 
     }

};

const toDoListOne = createToDoList();



// Q8  



let newammount = 0; 
const deposit = function (amount) {
 
  newammount = newammount + amount 
  return newammount 
  

  
};

// Q9 

const withdraw = function (amount) {
  
  if(amount > newammount){
  return "insufficient funds, current balance:" + newammount  
 }
 else{
  newammount = newammount - amount 
  return newammount 

 }
  
};


// Q10 
const createAccount = function (initialValue) {
  let newammount = initialValue 
  return function(transactionType , amount ){
    if(transactionType.toLowerCase()=== "deposit"){
      newammount = newammount + amount 
      return newammount 
       
    }
    else if(transactionType.toLowerCase()=== "withdraw"){
        if (amount > newammount){
          return "insufficient funds, current balance:" + newammount 

        }
        else{
          newammount = newammount - amount 
           return newammount 
        }
    }

  }
};

const accountOne = createAccount(0);
const accountTwo = createAccount(500)