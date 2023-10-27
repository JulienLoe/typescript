
import Car from "./Car.js"


const inputElement = document.querySelector('#mon-input1') as HTMLInputElement
const inputElement2 = document.querySelector('#mon-input2') as HTMLInputElement
const inputElement3 = document.querySelector('#mon-input3') as HTMLInputElement



const leBouton = document.querySelector('#mon-bouton') as HTMLButtonElement

const editBouton = document.querySelector('#edit-bouton') as HTMLButtonElement

// const category = document.querySelector('#category-select') as HTMLButtonElement


let tabCar: Car [] = []

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


leBouton.addEventListener('click', () => {
    const car = new Car(inputElement.value, inputElement2.value, inputElement3.value)
    tabCar.push(car)
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
        return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
      }
      
      postData(urlPost, tabCar);

    

    createCar()
    
    
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
            tabCar.splice(car.id, 1);

            async function deleteData() {
                // Les options par défaut sont indiquées par *
                const response = await fetch(`http://localhost:8080/car/${car.id}`, {
                  method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                  
                });
                return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
              }

              deleteData()

            console.log(tabCar)
        })

        buttonEdit.addEventListener('click', ()=>{
            console.log()
            const inputMarque = document.createElement('input')
            const inputModel = document.createElement('input')
            const inputPuissance = document.createElement('input')
            const enterButton = document.createElement('button')

            // enterButton.setAttribute("type", "submit");
            // enterButton.setAttribute("value", "Submit");

            enterButton.appendChild(document.createTextNode("Enter"));

            tabT?.appendChild(inputMarque)
            tabT?.appendChild(inputModel)
            tabT?.appendChild(inputPuissance)
            tabT?.appendChild(enterButton)

            enterButton.addEventListener('click', ()=>{
            const car = new Car(inputMarque.value, inputModel.value, inputPuissance.value)
            editCar()
            async function editCar() {
                // Les options par défaut sont indiquées par *
                const response = await fetch(`http://localhost:8080/car/${car.id}`, {
                  method: "PUT", // *GET, POST, PUT, DELETE, etc.
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify(car), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
                });
                return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
              }
            })

              createCar()
            console.log(tabCar)
        })
        
        
}

)
}

async function afficherCars() {
    const reponse = await fetch("http://localhost:8080/cars");
    const cars = await reponse.json();
    console.log(cars);

    tabCar = cars;
    console.log(cars);
    createCar()
  }

  document.addEventListener("DOMContentLoaded", afficherCars)
