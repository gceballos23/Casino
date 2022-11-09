import { Carta } from "./carta";

export class Mazo{
    cartas : Carta[];

    constructor(){
        this.cartas = [];
        this.generarCartas();
    }

    protected generarCartas():void{

        let palos : string[] = ["PICAS","CORAZONES","DIAMANTES","TREBOLES"];
        for (let i :number = 0; i < palos.length; i++) {
            for(let j : number = 1; j <= 13; j++){
               this.cartas.push(new Carta(palos[i],this.setNombreCarta(j),this.setValorCarta(j)))  
            }     
        }
    }

    protected setNombreCarta(valor: number): string{
        let valorString :string ="";
        switch (valor) {
            case valor: 1
                valorString = "UNO";
                break; 
            case valor: 2
                valorString = "DOS";
                break;         
            case valor: 3
                valorString = "TRES";
                break;
            case valor: 4
                valorString = "CUATRO";
                break;
            case valor: 5
                valorString = "CINCO";
                break;
            case valor: 6
                valorString = "SEIS";
                break;
            case valor: 7
                valorString = "SIETE";
                break;
            case valor: 8
                valorString = "OCHO";
                break;
            case valor: 9
                valorString = "NUEVE";
                break;
            case valor: 10
                valorString = "DIEZ";
                break;
            case valor: 11
                valorString = "JACK";
                break;
            case valor: 12
                valorString = "QUEEN";
                break;
            case valor: 13
                valorString = "KING";
                break;

        }       
        return valorString; 
    }

    protected setValorCarta(valor: number):number{
        let valorCarta :number = 0;
        switch (valor) {
            case valor: 1
                valorCarta = 1;
                break; 
            case valor: 2
                valorCarta = 2;
                break;         
            case valor: 3
                valorCarta = 3;
                break;
            case valor: 4
                valorCarta = 4;
                break;
            case valor: 5
                valorCarta = 5;
                break;
            case valor: 6
                valorCarta = 6;
                break;
            case valor: 7
                valorCarta = 7;
                break;
            case valor: 8
                valorCarta = 8;
                break;
            case valor: 9
                valorCarta = 9;
                break;
            case valor: 10
                valorCarta = 10;
                break;
            case valor: 11
                valorCarta = 10;
                break;
            case valor: 12
                valorCarta = 10;
                break;
            case valor: 13
                valorCarta = 10;
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