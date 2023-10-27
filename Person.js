class Person{
    constructor (firstname, lastname, email, password){
        this.lastname = lastname
        this.firstname = firstname
        this.email = email
        this.password = password

    }
}

class AutreClass{
    constructor(titi, toto){
        this.titi = titi
        this.toto = toto
    }
}

export {Person, AutreClass}
// export default Person