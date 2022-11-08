// VARIABILI
const nomeCognome = document.getElementById("name");
const distanza = document.getElementById("km");
const eta = document.getElementById("eta");
const myButton = document.getElementById("genera");

// BOTTONE GENERA
myButton.addEventListener("click",
  function(){
    document.getElementById("biglietto").innerHTML = `Il tuo nome è ${nomeCognome.value}, devi percorrere ${distanza.value} km e puoi usufruire di tariffa ${eta.value}.`;

    nomeCognome.value = "";
    distanza.value = "";
  }
)