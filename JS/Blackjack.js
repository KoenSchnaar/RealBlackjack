var aantalKaarten = ["Aas", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Boer", "Vrouw", "Koning"];
var aantalKleuren = ["Harten", "Ruiten", "Schoppen", "Klaver"];
var gepakteKaarten = [];
var handWaarde = [0,0];
var aanDeBeurt = "speler";

// pakt een kaart uit het stock kaarten en haalt deze uit de nog mogelijk te pakken kaarten door de kaart in een array te stoppen met 'gepakte kaarten'
function kaarten(){
    var randomKaart = aantalKaarten[Math.floor(Math.random() * aantalKaarten.length)];
    var randomKleur = aantalKleuren[Math.floor(Math.random() * aantalKleuren.length)];
    
    var kaart = randomKleur + " " + randomKaart;
    var alGespeeld = checkKaart(kaart);
    
    if(alGespeeld == true){
        kaarten();
    }
    else{
        gepakteKaarten.push(kaart);
        console.log(gepakteKaarten);
    }
    var waardeGepakteKaart = checkWaardeKaart(randomKaart);
    weergeefKaart(randomKaart, kaart, waardeGepakteKaart);
    checkTotaal();

    // test ******************************************
    // var test = document.getElementById("test");
    // test.onclick = gaan;

}

// function gaan(){
//     alert("gaan");
// }






// weergeeft de getrokken kaart op het scherm
function weergeefKaart(randomKaart, kaart, waardeGepakteKaart){
    totaleWaarde(waardeGepakteKaart);
        
    if(aanDeBeurt == "speler"){
        document.getElementById("PlayerCard").innerHTML += "<br>" + kaart;
        document.getElementById("waardeHandSpeler").innerHTML = handWaarde[0];
        }
    else if(aanDeBeurt == "dealer"){
        document.getElementById("dealerCard").innerHTML += "<br>" + kaart;
        document.getElementById("waardeHandDealer").innerHTML = handWaarde[1];
        }
    }

    function checkTotaal(){    
        if(handWaarde[0] > 21){
            alert("Jammer, je handwaarde is meer dan 21");
            newGame();
            }
        else if(handWaarde[1] > 21){
            alert("Gefeliciteerd, je hebt gewonnen!")
            newGame();
        }
    }

    


// checkt of de kaart al uit het stock kaarten is gepakt
function checkKaart(gepakteKaart){
    for(var x = 0; x < gepakteKaarten.length; x++){
        if(gepakteKaart == gepakteKaarten[x] && gepakteKaarten.length < 52){
            return true;
        }
    }
}


// kaarten in het stock worden weer gereset
function newGame(){
    for(var x = gepakteKaarten.length; x > 0; x--){
        gepakteKaarten.pop();
    }
    document.getElementById("PlayerCard").innerHTML = "";
    document.getElementById("waardeHandSpeler").innerHTML = 0;
    document.getElementById("dealerCard").innerHTML = "";
    document.getElementById("waardeHandDealer").innerHTML = 0;
    handWaarde = [0,0];
    // eerst klikken op een button en dan pas resetten?*********************************************************************
}

// geeft een waarde aan een kaart 
//aas moet nog worden aangepast!!**********************************
function checkWaardeKaart(kaart){
    var waarde = 0;
    if(kaart == "Aas"){
        waarde = 1;
    }
    else if(kaart == "Boer"){
        waarde = 10;
    }
    else if(kaart == "Vrouw"){
        waarde = 10;
    }
    else if(kaart == "Koning"){
        waarde = 10;
    }
    else{
        waarde = kaart;
    }
    return waarde;
}

// checkt of de waarde van de kaarten meer dan 21 is
function totaleWaarde(waardeKaart){
    if(aanDeBeurt == "speler"){
        handWaarde[0] += waardeKaart;
    }
    else if(aanDeBeurt == "dealer"){
        handWaarde[1] += waardeKaart;
    }
}

function wisselSpeler(){
    if(aanDeBeurt == "speler"){
        aanDeBeurt = "dealer";
    }
    else if(aanDeBeurt = "dealer"){
        aanDeBeurt = "speler";
    }
    console.log(aanDeBeurt);
}