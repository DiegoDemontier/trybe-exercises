let anguloA = 40;
let anguloB = 20;
let anguloC = 30;
let somaAngulo = anguloA + anguloB + anguloC;

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
  console.log('erro');
} else if (somaAngulo > 180) {
  console.log(false);
} else if (somaAngulo < 180) {
  console.log(true);
}