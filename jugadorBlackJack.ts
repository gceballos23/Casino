import { Carta } from "./carta";
import {Jugador} from "./jugador"

export class JugadorBlackJack extends Jugador {
    protected mano : Carta[];

    constructor(pNombre: string, pDinero: number){
        super(pNombre,pDinero);
         this.mano = [];
    }

    public resetMano():void{
         this.mano = [];
    }

    public getMano():Carta[]{
        return this.mano;
    }

    public PedirCarta(pCarta : Carta):void{
        this.mano.push(pCarta);
    }

    public getTotalMano():number{
        let temp_TotalMano : number = 0;
        let cantidadAss : number = 0
        for (let index = 0; index < this.mano.length; index++){
            temp_TotalMano = temp_TotalMano + this.mano[index].getValorNumerico();
            if ( this.mano[index].getValorNumerico() === 11){
                cantidadAss = cantidadAss + 1;
            }
        }

        if (cantidadAss > 0 && temp_TotalMano>21){
            temp_TotalMano = temp_TotalMano - (cantidadAss * 10);        
        } 

        return temp_TotalMano;
    }

    public quedarse(respuesta : string):boolean{
        if (respuesta.toLowerCase()=== "si"){
            return true
        }else{
            return false;
        }
    } 

    public MostrarCartas():string{
        let cartasMostrar : string = " ";
        for (let index = 0; index < this.mano.length ;index++) {
           cartasMostrar = cartasMostrar + " " + this.mano[index].getNombreCarta() + " ";
        }

        return cartasMostrar;
    }

}