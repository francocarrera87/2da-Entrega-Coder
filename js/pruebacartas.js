class Carta {
    constructor(valor, palo) {
      this.valor = valor;
      this.palo = palo;
    }
  
    mostrarCarta() {
      return `${this.valor} de ${this.palo}`;
    }
  }
  
  class Baraja {
    constructor() {
      this.cartas = [];
      const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
      const palos = ["Corazone", "Diamantes", "Tréboles", "Picas"];
  
      for (const palo of palos) {
        for (const valor of valores) {
          this.cartas.push(new Carta(valor, palo));
        }
      }
    }
  
    mezclar() {
      for (let i = this.cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
      }
    }
  
    repartir(cantidad) {
      if (cantidad <= this.cartas.length) {
        return this.cartas.splice(0, cantidad);
      } else {
        return null;
      }
    }
  }
  
  class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.cartas = [];
    }
  
    recibirCartas(cartas) {
      this.cartas = cartas;
    }
  
    mostrarMano() {
      return this.cartas.map(carta => carta.mostrarCarta());
    }
  }
  
  const baraja = new Baraja();
  baraja.mezclar();
  
  const nombreJugador1 = prompt("Ingrese el nombre del Jugador 1:");
  const nombreJugador2 = prompt("Ingrese el nombre del Jugador 2:");
  
  const cantidadCartas = parseInt(prompt("¿Cuántas cartas quieres que se repartan apra cada jugador?"));
  
  if (!isNaN(cantidadCartas)) {
    const manoJugador1 = baraja.repartir(cantidadCartas);
    const manoJugador2 = baraja.repartir(cantidadCartas);
  
    if (manoJugador1 && manoJugador2) {
      const jugador1 = new Jugador(nombreJugador1);
      jugador1.recibirCartas(manoJugador1);
      alert(`Cartas del ${jugador1.nombre}: ${jugador1.mostrarMano().join(", ")}`);
  
      const jugador2 = new Jugador(nombreJugador2);
      jugador2.recibirCartas(manoJugador2);
      alert(`Cartas del ${jugador2.nombre}: ${jugador2.mostrarMano().join(", ")}`);
    } else {
      alert("No hay suficientes cartas para repartir a ambos jugadores.");
    }
  } else {
    alert("Por favor, ingresar un número válido.");
  }
  