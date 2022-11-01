import { Slot } from "./slot";
import { Tragamoneda } from "./tragamonedas";
import * as ReadlineSync from "readline-sync";

let input = ReadlineSync;

let slotBasico = new Slot(["Naranja","Siete","BarBar","Pera","Banana","Cerezas"])
let maquinaNormal = new Tragamoneda(slotBasico,3,100);

maquinaNormal.cargarSlot();
let seguirJugando : number = Number( input.question("Ingrese 1 si quiere jugar Al Tragamonedas: "));
if (seguirJugando = 1){
    maquinaNormal.IngresarDinero(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea de dinero: ")));
}

maquinaNormal.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS: ")));

while ((seguirJugando = 1)&&(maquinaNormal.getDineroIngesado()>0)){
    if (maquinaNormal.getApuesta() <= maquinaNormal.getDineroIngesado()){
        maquinaNormal.TirarPalanca();
        console.log(maquinaNormal.UltimaJugada());
        console.log("Premio: " + maquinaNormal.getPremio())
        console.log("Dinero: " + maquinaNormal.getDineroIngesado());
        console.log("Pozo Total: "+ maquinaNormal.getPozoTotal());
     
    } else {
       console.log("La apuesta es mayor a dinero que tiene!!") 
    }

    seguirJugando = Number(input.question("Ingrese 1 para Seguir Jugando : "));
    if (seguirJugando = 1){
        maquinaNormal.IngresarDinero(Number(input.question("Ingrese Cantidad nueva de Dinero si lo desea de dinero : ")));
        maquinaNormal.setApuesta(Number(input.question("APUESTA 1: 1 - FICHA APUESTA 2: 3 FICHAS - APUESTA3: 5 FICHAS")));

    }
}

console.log(maquinaNormal.getDineroIngesado())
