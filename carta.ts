export class Carta{
    protected palo : string;
    protected nombreCarta: string;
    protected ValorNumerico : number;
    constructor(pPalo: string, pNombreCarta: string,pValorNUmerico: number){
        this.palo =  pPalo;
        this.nombreCarta = pNombreCarta;
        this.ValorNumerico = this.ValorNumerico;
    }

    public getPalo():string{
        return this.palo;
    }

    protected setPalo(pPalo : string):void{
        this.palo = pPalo;
    }

    public getNombreCarta():string{
        return  this.nombreCarta;
    }

    protected setNombreCarta(pNombre : string):void{
        this.nombreCarta = pNombre;
    }

    public getValorNumerico():number{
        return this.ValorNumerico;
    }

    protected setValorNumerico(pValor : number):void{
        this.ValorNumerico = pValor;
    }

    

    public setCarta(pPalo:string, pNombreCarta:string,pValorNumerico: number){
        this.setPalo(pPalo);
        this.setNombreCarta(this.nombreCarta);
        this.setValorNumerico(this.ValorNumerico);
    }
}