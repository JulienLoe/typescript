class Car{

    public static count = 0
    
        protected _id: number
        public _marque: string
        public _model: string
        public _puissance: string
       
    
        constructor(marque: string, model: string, puissance: string) {
            this._id = Car.count++
            this._marque = marque
            this._model = model
            this._puissance = puissance
        }
    
        public get marque() : string {
            return this._marque
        }
    
        
        public set marque(v : string) {
            this._marque = v;
        }
    
        
        public get model() : string {
            return this._model
        }
    
        
        public set model(v : string) {
            this._model = v;
        }
    
        public get puissance() : string {
            return this._puissance
        }
    
        
        public set puissance(v : string) {
            this._puissance = v;
        }

    
        public get id() : number {
            return this._id
        }
    
        
        public set id(v : number) {
            this._id = v;
        }
    
    }

    export default Car