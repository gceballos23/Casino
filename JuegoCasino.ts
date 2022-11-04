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

    protected leerArchivo(pArchivo : string):string{
        let contenidoArchivo : string;
        try {
            contenidoArchivo = fs.readFileSync("./" + pArchivo, 'utf8');
        } catch(error) {

            fs.writeFileSync("./" + pArchivo,this.nombre, 'utf8');
            contenidoArchivo = fs.readFileSync("./" +pArchivo, 'utf8');
        }
        
        return contenidoArchivo;
       
 
    }

    protected GuardarArchivo(pArchivo: string, pContenido: string):void{
        fs.writeFileSync("./" + pArchivo,pContenido, 'utf8');
    }

    protected setDescripcion():void{
        this.descripcion = this.leerArchivo(this.nombre + ".txt");
    }

    public getDescripcion():string{
        return this.descripcion;
    }

}