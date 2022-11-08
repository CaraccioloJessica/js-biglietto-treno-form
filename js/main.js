const myButton = document.getElementById("genera");

// BOTTONE GENERA
myButton.addEventListener("click",
  function(){

    // VARIABILI
    const nomeCognome = document.getElementById("name").value;
    const distanza = parseInt(document.getElementById("km").value);
    const eta = document.getElementById("eta").value;

    let prezzo = distanza * 0.21;
    let offerta = 'Standard';
    let sconto;
    let prezzoFinale = prezzo;

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

    document.getElementById('pass-name').innerHTML = nomeCognome;

    document.getElementById('offer-price').innerHTML = offerta;

    document.getElementById('car-num').innerHTML = Math.floor(Math.random()*9) + 1;

    document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;

    document.getElementById('ticket-price').innerHTML = prezzoFinale.toFixed(2) + ' euro';


    // document.getElementById("biglietto").innerHTML = `Il tuo nome è ${nomeCognome.value}, devi percorrere ${distanza.value} km e puoi usufruire di tariffa ${eta.value}.`;

    
  }
  )

  const cancButton = document.getElementById("annulla");

  cancButton.addEventListener("click",
  function(){
    document.getElementById('pass-name').innerHTML = "";

    document.getElementById('offer-price').innerHTML = "";

    document.getElementById('car-num').innerHTML = "";

    document.getElementById('ticket-code').innerHTML = "";

    document.getElementById('ticket-price').innerHTML = "";
  }
  )
