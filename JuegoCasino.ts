import * as fs from 'fs'

export class JuegoCasino{
    protected nombre : string;
    protected descripcion :string;
   

    constructor(pNombre:string){
        this.nombre = pNombre;
        this.descripcion = "";
        this.setDescripcion();
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(pNombre : string):void{
        this.nombre = pNombre;
    }

    protected leerArchivo():string{
        let contenidoArchivo : string;
        try {
            contenidoArchivo = fs.readFileSync("./"+ this.nombre + ".txt", 'utf8');
        } catch(error) {

            fs.writeFileSync("./" + this.nombre+".txt",this.nombre, 'utf8');
            contenidoArchivo = fs.readFileSync("./" +this.nombre+".txt", 'utf8');
        }
        
        return contenidoArchivo;
       
 
    }

    protected setDescripcion():void{
        this.descripcion = this.leerArchivo();
    }

    public getDescripcion():string{
        return this.descripcion;
    }

}