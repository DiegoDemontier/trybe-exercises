let numero = Math.ceil(Math.random()*1000)
let cont = 0;

for (let i = 1; i <= numero; i += 1) {
  if (numero % i !== 0) {
    cont += 1;
  }
}
if( cont === (numero-2)) {
  console.log('O número '+numero, 'é primo')
} else {
  console.log ('O número '+numero, 'não é primo')
}