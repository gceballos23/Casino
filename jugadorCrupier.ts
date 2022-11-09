import { JugadorBlackJack } from "./jugadorBlackJack";

export class JugadorCrupier extends JugadorBlackJack{

    public quedarse():boolean{
        if (this.getTotalMano() >= 16 && this.getTotalMano()<=21){
            return true;
        
        }else{
            return false;
        }
    }
}