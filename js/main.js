// VARIABILI
const nomeCognome = document.getElementById("name");
const distanza = document.getElementById("km");
const eta = document.getElementById("eta");
const myButton = document.getElementById("genera");

// BOTTONE GENERA
myButton.addEventListener("click",
  function(){
    document.getElementById("biglietto").innerHTML = `Il tuo nome è ${nomeCognome.value} e devi percorrere ${distanza.value} km`;

    nomeCognome.value = "";
    distanza.value = "";
  }
)