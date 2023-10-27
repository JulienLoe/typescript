import {Person} from './Person.js'
import * as mesOperations from './operation.js'
import {Todo}  from './Todo.js'


// const text = document.querySelector('main > h1')
// const para = document.querySelector('p#para')
// setTimeout(()=>{
//     para.textContent = 'blabla'
// }, 2000)
// const monBoutton = document.querySelector('button')

// const maListe = document.querySelector("#ma-liste")

// // monBoutton.addEventListener('click', ()=>{
// //      monBoutton = document.querySelector('button')
// // })

// let moncompteur = 1

// monBoutton.addEventListener('', ()=>{
//     const unLi = document.createElement('li')
//     unLi.textContent = `Element n°${moncompteur++}`
//     maListe.appendChild(unLi)
// })

const monFormulaire = document.querySelector('form')

// const firstnameInput = document.querySelector('input#firstname')

// firstnameInput.addEventListener('input', (event) =>{
//     console.log("J'ai tapé dans l'input firstname")
//     console.log(event.target.value)
// })

// let counter = 0

// let tabUser = [];

// const counterDom = document.querySelector('span#counter')
// counterDom.textContent = counter

// monFormulaire.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     counter++
    
//     const nouvellePersonne = new Person(document.querySelector('input#firstname').value, document.querySelector('input#lastname').value,  document.querySelector('input#email').value,  document.querySelector('input#password').value )
    
//     tabUser.push(nouvellePersonne)
//     counterDom.textContent = counter
//     console.log(tabUser)

//     const tabU = document.querySelector('ul#tabUser')

//     const li = document.createElement('li')
//     li.textContent = nouvellePersonne.firstname + " " + nouvellePersonne.lastname + " " + nouvellePersonne.email
//     tabU.appendChild(li)

// })

// const tabTodo = [];
// tabTodo.sort((a,b)=>a.getTime()-b.getTime());

// let counterId = 0

// monFormulaire.addEventListener('submit', (event)=>{

    
//     event.preventDefault()
//     counterId++
    
//     const nouvelleTodo = new Todo(counterId, document.querySelector('input#taskName').value, document.querySelector('input#deadLine').value )
    
//     tabTodo.push(nouvelleTodo)
//     tabTodo.sort(function(x, y) {
//         var firstDate = new Date(x.deadLine),
//             SecondDate = new Date(y.deadLine);
      
//         if (firstDate < SecondDate) return -1;
//         if (firstDate > SecondDate) return 1;
//         return 0;
//       });
    
//     console.log(tabTodo)
    

//     const tabT = document.querySelector('ul#tabTodo')

//     const li = document.createElement('li')
//     const button = document.createElement('button')
//     button.appendChild(document.createTextNode("Delete"));
//     li.textContent = nouvelleTodo.taskname + " " + nouvelleTodo.deadLine + " " 
//     tabT.appendChild(li)
//     tabT.appendChild(button)

//     button.addEventListener("click", () => {
//         deleteTodo(counterId);
//         li.remove()
//         button.remove()
//         tabTodo.sort(function(x, y) {
//             var firstDate = new Date(x.deadLine),
//                 SecondDate = new Date(y.deadLine);
          
//             if (firstDate < SecondDate) return -1;
//             if (firstDate > SecondDate) return 1;
//             return 0;
//           });
//       });
    

// })


//   const createTodo = (arr) => {


    
//     arr.forEach((todo,id) => {
//         const tabT = document.querySelector('ul#tabTodo')
        
//         const li = document.createElement('li')
//         const button = document.createElement('button')
//         button.appendChild(document.createTextNode("Delete"));
//         li.textContent = todo.taskname + " " + todo.deadLine + " " 
//         tabT.appendChild(li)
//         tabT.appendChild(button)
  
//       button.addEventListener("click", () => {
//         tabTodo.sort(function(x, y) {
//             var firstDate = new Date(x.deadLine),
//                 SecondDate = new Date(y.deadLine);
          
//             if (firstDate < SecondDate) return -1;
//             if (firstDate > SecondDate) return 1;
//             return 0;
//           });
//         console.log(id)
//         deleteTodo(id);
//         console.log(tabTodo)
//         li.remove()
//         button.remove()
        
        
//       });
  
    
  
      
//     });
    
//   };
  
//   const deleteTodo = (index) => {
//     tabTodo.splice(index, 1);
//     tabTodo.sort(function(x, y) {
//         var firstDate = new Date(x.deadLine),
//             SecondDate = new Date(y.deadLine);
      
//         if (firstDate < SecondDate) return -1;
//         if (firstDate > SecondDate) return 1;
//         return 0;
//       });
//       const tabT = document.querySelector('ul#tabTodo')
//       tabT.innerHTML =""
//       createTodo(tabTodo);
//       console.log(tabTodo)
    
//    console.log(tabTodo[0].deadLine)
//   };
//   window.addEventListener("load", () => {
//     createTodo(tabTodo);
//     tabTodo.sort(function(x, y) {
//         var firstDate = new Date(x.deadLine),
//             SecondDate = new Date(y.deadLine);
      
//         if (firstDate < SecondDate) return -1;
//         if (firstDate > SecondDate) return 1;
//         return 0;
//       });
//   });

// console.log(tabTodo)

var input = document.getElementById('result'), // input/output button
  number = document.querySelectorAll('button'), // number buttons
  operator = document.querySelectorAll('operation-btn'), // operator buttons
  result = document.getElementById('equal'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// adding click handlers to number buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // storing current input string and its last character in variables - used later
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first key pressed is an opearator, don't do anything
      console.log("enter a number first");
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// on click of 'equal' button
result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})