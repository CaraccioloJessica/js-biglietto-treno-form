// VARIABILI
const nomeCognome = document.getElementById("name");
const distanza = document.getElementById("km");
const eta = document.getElementById("eta");
const myButton = document.getElementById("genera");

let prezzo = distanza * 0.21;
let offerta = 'Standard';
let sconto;
let prezzoFinale = prezzo;

// BOTTONE GENERA
myButton.addEventListener("click",
  function(){
    if (eta === 'Giovani'){
      offerta = 'Tariffa Giovani'
      sconto = prezzo * 20 / 100;
      prezzoFinale = prezzo - sconto;
    }

    else if (eta == 'Senior') {
      offerta = 'Sconto Over65'
      sconto = prezzo * 40 / 100;
      prezzoFinale = prezzo - sconto;
    }






    // document.getElementById("biglietto").innerHTML = `Il tuo nome è ${nomeCognome.value}, devi percorrere ${distanza.value} km e puoi usufruire di tariffa ${eta.value}.`;
  }
)