import { Jugador } from "./jugador";
import { JuegoCasino } from "./JuegoCasino";
import { Casino} from "./casino"

let miCasino = new Casino();

let miJuego = new JuegoCasino("Tragamonedas");

let Participante = new Jugador("German", 500);

miCasino.agergarJuegos(miJuego);
miCasino.ingresoJugador(Participante);
miJuego.getDescripcion();