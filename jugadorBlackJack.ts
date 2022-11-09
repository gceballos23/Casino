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
        for (let index = 0; index < this.mano.length; index++){
            temp_TotalMano = temp_TotalMano + this.mano[index].getValorNumerico();
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
           cartasMostrar =  this.mano[index].getNombreCarta() + " ";
        }

        return cartasMostrar;
    }

}