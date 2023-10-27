class Contact{

public static count = 0

    protected _id: number
    protected _nom: string
    protected _prenom: string
    protected _email: string
    protected _numberPhone: string

    constructor(nom: string, prenom: string, email: string, numberPhone: string) {
        this._id = Contact.count++
        this._nom = nom
        this._prenom = prenom
        this._email = email
        this._numberPhone = numberPhone
    }

    public get nom() : string {
        return this._nom
    }

    
    public set nom(v : string) {
        this._nom = v;
    }

    
    public get prenom() : string {
        return this._prenom
    }

    
    public set prenom(v : string) {
        this._nom = v;
    }

    public get email() : string {
        return this._email
    }

    
    public set email(v : string) {
        this._email = v;
    }

    public get numberPhone() : string {
        return this._nom
    }

    
    public set numberPhone(v : string) {
        this._nom = v;
    }

    public get id() : number {
        return this._id
    }

    
    public set id(v : number) {
        this._id = v;
    }

}