import { Carta } from "./carta";

export class Mazo{
    cartas : Carta[];

    constructor(){
        this.cartas = [];
        this.generarCartas();
    }

    protected generarCartas():void{

        let palos : string[] = ["PICAS","CORAZONES","DIAMANTES","TREBOLES"];
        for (let i = 0; i < palos.length; i++) {
            for(let j = 1; j<13;j++){
               this.cartas.push(new Carta(palos[i],this.setNombreCarta(j),this.setValorCarta(j)))  
            }     
        }
    }

    protected setNombreCarta(valor: number): string{
        let valorString :string ="";
        switch (valor) {
            case valor: 1
                valorString = "UNO" 
            case valor: 2
                valorString = "DOS"         
            case valor: 3
                valorString = "TRES"
            case valor: 4
                valorString = "CUATRO"
            case valor: 5
                valorString = "CINCO"
            case valor: 6
                valorString = "SEIS"
            case valor: 7
                valorString = "SIETE"
            case valor: 8
                valorString = "OCHO"
            case valor: 9
                valorString = "NUEVE"
            case valor: 10
                valorString = "DIEZ"
            case valor: 11
                valorString = "JACK"
            case valor: 12
                valorString = "QUEEN"
            case valor: 13
                valorString = "KING"
        }       
        return valorString; 
    }

    protected setValorCarta(valor: number):number{
        let valorCarta :number = 1;
        switch (valor) {
            case valor: 1
                valorCarta = 1 
            case valor: 2
                valorCarta = 2         
            case valor: 3
                valorCarta = 3
            case valor: 4
                valorCarta = 4
            case valor: 5
                valorCarta = 5
            case valor: 6
                valorCarta = 6
            case valor: 7
                valorCarta = 7
            case valor: 8
                valorCarta = 8
            case valor: 9
                valorCarta = 9
            case valor: 10
                valorCarta = 10
            case valor: 11
                valorCarta = 10
            case valor: 12
                valorCarta = 10
            case valor: 13
                valorCarta = 10
            default:
                break;
        } 
        return valorCarta;       
    }

    public mezclarCartas():void{
        let contador = this.cartas.length;
    
        while ( contador > 0) {
            let index = Math.floor(Math.random() * contador);
            contador--;
            let temp = this.cartas[contador];
            this.cartas[contador] = this.cartas[index];
            this.cartas[index] = temp;
        }
        
    }

    public sacarCarta():Carta{
        let cartAux = new Carta (this.cartas[0].getPalo(),
                                 this.cartas[0].getNombreCarta(),
                                 this.cartas[0].getValorNumerico());
        this.cartas.splice(0,1);
        return cartAux;
    }

    public vaciarMazo():void{
        this.cartas = [];
    }

    public cartasEnelMazo():number{
        return this.cartas.length
    }
}    