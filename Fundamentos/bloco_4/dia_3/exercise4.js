let n = 5;
let matrix = '';
let meio = Math.ceil(n/2)
let = cont1 = meio;
let = cont2 = meio;


if (n > 1) {
  for (let i = 0; i <= meio; i += 1) {
    matriz = '';
    for (let ii = 1; ii <= n; ii += 1) {
      if (ii > cont2 && ii < cont1){
        matriz += '*';
      }else {
        matriz += ' ';
      }
    } 
    console.log(matriz);
    cont1 += 1;
    cont2 -= 1;
  }
}