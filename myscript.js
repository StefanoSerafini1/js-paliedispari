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
