class CarPost{

    public static count = 0
    
        public id: number
        public _marque: string
        public _model: string
        public _puissance: string
       

        constructor(id: number,marque: string, model: string, puissance: string) {
            this.id = id
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
            return this.id
        }
    
        
        public set id(v : number) {
            this.id = v;
        }
        
    
    }

    export {CarPost}