"use strict";
class Contact {
    static count = 0;
    _id;
    _nom;
    _prenom;
    _email;
    _numberPhone;
    constructor(nom, prenom, email, numberPhone) {
        this._id = Contact.count++;
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._numberPhone = numberPhone;
    }
    get nom() {
        return this._nom;
    }
    set nom(v) {
        this._nom = v;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(v) {
        this._nom = v;
    }
    get email() {
        return this._email;
    }
    set email(v) {
        this._email = v;
    }
    get numberPhone() {
        return this._nom;
    }
    set numberPhone(v) {
        this._nom = v;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
}
