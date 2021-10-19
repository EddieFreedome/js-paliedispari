// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//utente sceglie pari o dispari
//utente sceglie un numero da 1 a 5
//generazione numero da 1 a 5 per il computer
//sommo il numero utente e il numero macchina
//se la somma e' uguale alla dichiarazioneUtente, vince utente
//altrimenti, vince macchina.


const button = document.querySelectorAll(".my-buttons")


const buttonPari = document.getElementById("pari")
const buttonDispari = document.getElementById("dispari")
let numeroScelto;
let pari;
let dispari
let somma;


//al click del pulsante compare l'alert e comincia il ciclo.
buttonPari.addEventListener("click", function () {
    console.log("ok")
    //scegliendo pari, viene automaticamente scelta l'opzione pari
    pari = true
    //chiedo prompt
    numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 5"))
    console.log(`Numero Utente ${numeroScelto}`)
    
    //condizioni if
    if (numeroScelto > 5){
        alert("Inserisci un numero da 1 a 5!")
        return
    }
    
    //generazione numero casuale PC
    let numeroPc = getRandomIntInclusive(1, 5) //funzione numero casuale;
    console.log(`numero PC = ${numeroPc}`);
    alert(`Pa-ri-e-Dis-pa-ri!   Numero I.A. : ${numeroPc}`);
    // somma = numeroScelto + numeroPc
    let sommaFinale = sommaNumeri(numeroScelto, numeroPc);
    console.log(sommaFinale);
    
    if (sommaFinale % 2 === 0 && pari === true){
        alert("Hai vinto")
        console.log("numero pari")
    } else {
        alert("Ha vinto l'I.A.")
    }
})

//al click del pulsante dispari, l'opzione e' automaticamente dispari
buttonDispari.addEventListener("click", function () {
    console.log("ok")
    //scegliendo pari, viene automaticamente scelta l'opzione pari
    //chiedo prompt
    numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 5"))
    console.log(`Numero Utente ${numeroScelto}`)
    
    //condizioni if
    if (numeroScelto > 5){
        alert("Inserisci un numero da 1 a 5!")
        return
    }
    
    //generazione numero casuale PC
    let numeroPc = getRandomIntInclusive(1, 5) //funzione numero casuale;
    console.log(`numero PC = ${numeroPc}`);
    alert(`Pa-ri-e-Dis-pa-ri!   Numero I.A. : ${numeroPc}`);
    // somma = numeroScelto + numeroPc
    let sommaFinale = sommaNumeri(numeroScelto, numeroPc);
    console.log(sommaFinale);
    
    if (sommaFinale % 3 === 0){
        alert("Hai vinto")
        console.log("numero pari")
    } else {
        alert("Ha vinto l'I.A.")
    }
})

/*FUNZIONI*/
function getRandomIntInclusive(min = 1, max = 5) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + min) + 1);  //function by MDN 
}

function sommaNumeri(numeroScelto, numeroPc) {
    let somma = numeroScelto + numeroPc;
    if (somma % 2 !== 0){
     dispari = true
     console.log('Numero dispari')   
    } else {
        pari = true
    }
    return somma
}

function creaNumeroUtente(){
    numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 5"))
    console.log(`Numero Utente ${numeroScelto}`)
    
    //condizioni if
    if (numeroScelto > 5){
        alert("Inserisci un numero da 1 a 5!")
        return
    }

}