//esercizio parola e capire se palindroma

var parola=prompt('Inserisci una parola');

var parolainvertita=inversione(parola);//assegnazione funzione  a variabile
//stampe delle due parole
document.getElementById('parola').innerHTML = 'La parola da te inserita è: ' + parola;
console.log('Le due parole sono:  ' + parola + ' ' + parolainvertita);
document.getElementById('invertita').innerHTML = 'La parola al contrario è: ' + parolainvertita;
//ciclo if per capire se le due stringhe sono uguali
if(parola === parolainvertita){
  console.log('le due parole sono palindrome')
  document.getElementById('palindroma').innerHTML = 'Le due parole sono palindrome';

}else{
  console.log('le due parole non sono palindrome');
  document.getElementById('palindroma').innerHTML = 'Le due parole NON sono palindrome';
}
//funzione per inversione parola con ritorno a variabile della parola ribaltata
function inversione(parola){
  var inv= parola.split('').reverse().join('');
  return inv;
}

//secondo es:L'utente inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.

var pod=prompt('Scegli pari o dispari');
var num=parseInt(prompt('Inserisci un numero da 1 a 5'));
//controllo se inserito veramnete pari o dispari
if(pod !== 'pari' &&  pod !== 'dispari'){
  console.log('Scegli tra pari o dispari');
  var pod=prompt('Scegli pari o dispari');
}
//controllo se numero != da volore richiesto
if(num < 1 && num > 5){
  console.log('Inserisci un numero da 1 a 5');
  var num=prompt('Inserisci un numero da 1 a 5');
}

console.log('scelta utente: ' + pod + '   Numero scelto dal utente ' + num);
document.getElementById('scelte').innerHTML = 'scelta utente: ' + pod + ' Numero scelto dal utente ' + num;
//richiamo funzione numero random da 1 a 5
var random=generazione();
console.log('Numero generato: ' + random);
document.getElementById('random').innerHTML ='Numero generato: ' + random

//somma dei due valori
var somma= num + random;
console.log('La somma dei due numeri è: ' + somma);
document.getElementById('somma').innerHTML ='La somma dei due numeri è: ' + somma;
//richiamo delle due funzioni controllo della somma se pari o dispari
//controllo della vittoria in base a scelta utente
var controllo=controllo(somma);
var vittoria=vincente(pod,controllo);
//stampe finali
console.log('La somma è:  ' + controllo);
console.log(vittoria);
document.getElementById('controllo').innerHTML ='La somma è: ' + controllo;
document.getElementById('vittoria').innerHTML =vittoria;

//funz numero random
function generazione(){
  var n = Math.floor( Math.random() * 5 + 1);
  return n;
}
//funz controllo somma se pari o dispari
function controllo(somma){
  var vitt='';

  if(somma % 2 == 0){
     vitt='pari';
    return vitt;
  }else{
    vitt='dispari';
    return vitt;
  }
}
//funz per capire chi ha vinto in base a scelta utente
function vincente(pod,controllo){
  var vincitore='';
  if(pod === controllo){
    vincitore='HAI VINTO';
    return vincitore;
  }else{
    vincitore='HAI PERSO';
    return vincitore;
  }
}
