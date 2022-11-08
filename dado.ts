export class Dado{
   protected valorNumero: number;
   protected valorString: string[];

   constructor(){
    this.valorNumero = 0;
    this.valorString = [];
    this.setValorString();
    this.tirarDado();
   }

   public getNumero():number{
    return this.valorNumero;
   }

   public getValorString():string{
    return this.valorString[this.valorNumero -1];
   }

   protected setNumero(pValorNumero: number):void{
    this.valorNumero = pValorNumero;
   }

   protected setValorString():void{
    this.valorString = ["UNO", "DOS","TRES","CUATRO","CINCO","SEIS"];
   } 

   public tirarDado():void{
    this.setNumero(Math.floor(Math.random() * this.valorString.length)+1);
   }   


}