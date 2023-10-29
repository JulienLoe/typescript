
import Car from "./Car.js"
import {CarPost} from "./CarPost.js"


const inputElement = document.querySelector('#mon-input1') as HTMLInputElement
const inputElement2 = document.querySelector('#mon-input2') as HTMLInputElement
const inputElement3 = document.querySelector('#mon-input3') as HTMLInputElement



const leBouton = document.querySelector('#mon-bouton') as HTMLButtonElement

const editBouton = document.querySelector('#edit-bouton') as HTMLButtonElement

const divEdit = document.querySelector('#edit') as HTMLDivElement

// const category = document.querySelector('#category-select') as HTMLButtonElement


let tabCar: Car [] = []

let clickEdit = 0

// category.addEventListener('change', (event: Event)=>{
//     const { target } = event
//     // console.log((target as HTMLInputElement).value == 'nom')

//     if((target as HTMLInputElement).value == "id"){
//         console.log("ok")
//         tabContact.sort(function(x, y) {
                       
                      
//                         if (x.id > y.id) return -1;
//                         if (x.id < y.id) return 1;
//                         return 0;
//                       });
                      
//     }

//     if((target as HTMLInputElement).value == "nom"){
//         console.log("ok")
//         tabContact.sort(function(x, y) {
                       
                      
//                         if (x.nom > y.nom) return -1;
//                         if (x.nom < y.nom) return 1;
//                         return 0;
//                       });
//                     }

//     if((target as HTMLInputElement).value == "prenom"){
//         console.log("ok")
//             tabContact.sort(function(x, y) {
                                       
                                      
//                 if (x.prenom > y.prenom) return -1;
//                 if (x.prenom < y.prenom) return 1;
//                 return 0;
//                                       });
//                                     }                
//     console.log(tabContact)
// })

const urlPost = "http://localhost:8080/car"

async function afficherCars() {
  const reponse = await fetch("http://localhost:8080/cars");
  const cars = await reponse.json();
  console.log(tabCar);

  tabCar = cars;
  console.log(cars);
  createCar()
}


leBouton.addEventListener('click', () => {
    const car = new Car(inputElement.value, inputElement2.value, inputElement3.value)
    
    console.log(Car.count)
    console.log(JSON.stringify(tabCar))
    

    async function postData(urlPost: string, tabCar: Car[]) {
        // Les options par défaut sont indiquées par *
        const response = await fetch(urlPost, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(car), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
        });
        if(response){
          afficherCars()
        }
        return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
      }
      
      postData(urlPost, tabCar);

    

    afficherCars()
    
    
})

const createCar = ()=>{
    const tabT = document.querySelector('ul#tabContact')
    tabT!.innerHTML =""
    tabCar.forEach((car) => {
        console.log(car._marque)
        
         const buttonEdit = document.createElement('button')
         const button = document.createElement('button')
         const li = document.createElement('li')

         
        
        
        button.appendChild(document.createTextNode("Delete"));
        buttonEdit.appendChild(document.createTextNode("Edit"));
        li.textContent = car._marque + " " + car._model + " " + car._puissance
        tabT?.appendChild(li)
        tabT?.appendChild(button)
        tabT?.appendChild(buttonEdit)

        button.addEventListener('click', ()=>{
            li.remove()
            button.remove()
            buttonEdit.remove()
            tabCar.splice(car.id, 1);
            console.log(car.id)
            let resp
            async function deleteData() {
                // Les options par défaut sont indiquées par *
                const response = await fetch(`http://localhost:8080/car/${car.id}`, {
                  method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : "*", 
                  
                  }
                  
                
                  
                });
                resp = await response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
                tabCar = []
                tabCar = resp

                
                console.log(tabCar)
              }
              
              deleteData()
              

            console.log(tabCar)
        })

        buttonEdit.addEventListener('click', ()=>{
          clickEdit++
          if(clickEdit == 1){
          console.log('ok')
          const inputMarque = document.createElement('input')
          const inputModel = document.createElement('input')
          const inputPuissance = document.createElement('input')
          const enterButton = document.createElement('button')

          // enterButton.setAttribute("type", "submit");
          // enterButton.setAttribute("value", "Submit");

          enterButton.appendChild(document.createTextNode("Enter"));

          divEdit?.appendChild(inputMarque)
          divEdit?.appendChild(inputModel)
          divEdit?.appendChild(inputPuissance)
          divEdit?.appendChild(enterButton)

          enterButton.addEventListener('click', ()=>{
          clickEdit = 0
          divEdit.innerHTML = ""  
          const car1 = new CarPost(car.id, inputMarque.value, inputModel.value, inputPuissance.value)
          console.log(car1)
          console.log("ok")

          async function editCar() {
              // Les options par défaut sont indiquées par *
              console.log(car.id)
              const response = await fetch(`http://localhost:8080/car/${car.id}`, {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(car1), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
              });
              tabCar = await response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
              
            }

            editCar()
            location.reload()
          })

            
          console.log(tabCar)}
          
      })
        
        
}

)
}



  document.addEventListener("DOMContentLoaded", afficherCars)
