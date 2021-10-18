// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//prompt parola
//creare un array delle lettere della parola
//creare un array reverse della parola
//confronto: il primo array e' uguale al secondo?
//se si', e' palindroma, se no, non e' palindroma

const parolaUtente = prompt("Inserisci una parola");
console.log('ok');

    /*SENZA FUNZIONE*/
// const arrParola = parolaUtente.split('');
// console.log(arrParola);
// const arrRevParola = arrParola.reverse();
// console.log(arrRevParola)
// if (parolaUtente === arrRevParola){
//     alert("La parola e' palindroma!")
// } else {
//     alert("La parola NON e' palindroma")
// }


//e.s. funzione
// function nomefunzione (argomento, argomento){}
    //codice
    //return valore
// }

/*FUNZIONE*/
palindroma(parolaUtente)

function palindroma(p) {
    const arrParola = p.split('');
    console.log(p)
    console.log(arrParola);
    const arrRevParola = arrParola.reverse().join('');
    console.log(arrRevParola)
    if (p === arrRevParola){
        alert("La parola e' palindroma!")
    } else {
        alert("La parola NON e' palindroma")
    }
}