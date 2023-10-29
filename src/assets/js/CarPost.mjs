class CarPost {
    static count = 0;
    id;
    _marque;
    _model;
    _puissance;
    constructor(id, marque, model, puissance) {
        this.id = id;
        this._marque = marque;
        this._model = model;
        this._puissance = puissance;
    }
    get marque() {
        return this._marque;
    }
    set marque(v) {
        this._marque = v;
    }
    get model() {
        return this._model;
    }
    set model(v) {
        this._model = v;
    }
    get puissance() {
        return this._puissance;
    }
    set puissance(v) {
        this._puissance = v;
    }
    get id() {
        return this.id;
    }
    set id(v) {
        this.id = v;
    }
}
export { CarPost };
