import * as fs from 'fs'

export class JuegoCasino{
    protected nombre : string;
    protected descripcion :string;
    protected archivo : string;

    constructor(pNombre:string){
        this.nombre = pNombre;
        this.archivo = "./" + pNombre+".txt";
        this.descripcion =  this.leerArchivo();
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
            contenidoArchivo = fs.readFileSync(this.archivo, 'utf8');
        } catch(error) {

            fs.writeFileSync(this.archivo,this.nombre, 'utf8');
            contenidoArchivo = fs.readFileSync(this.archivo, 'utf8');
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