//esercizio parola e capire se palindroma

var parola=prompt('Inserisci una parola');
var parolainvertita=inversione(parola);

console.log('Le due parole sono:  ' + parola + ' ' + parolainvertita);

if(parola === parolainvertita){
  console.log('le due parole sono palindrome')
}else{
  console.console.log('le due parole non sono palindrome');
}

function inversione(parola){
  var inv= parola.split('').reverse().join('');
  return inv;
}
