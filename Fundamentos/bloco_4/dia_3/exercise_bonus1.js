let n = 9;
let matrix = '';
let meio = Math.ceil(n/2)
let = cont1 = meio;
let = cont2 = meio;
let = cont3 = meio+1;
let = cont4 = meio-1;

if (n > 1) {
  for (let i = 0; i <= meio; i += 1) {
    matriz = '';
    for (let ii = 1; ii <= n; ii += 1) {
      if (ii > cont2 && ii < cont1){
        if (i === (meio)) {
          matriz += '*';
        } else if (ii > cont3 && ii < cont4) {
          matriz += ' ';
        } else {
          matriz += '*';
        }
      }else {
        matriz += ' ';
      }
    } 
    console.log(matriz);
    cont1 += 1;
    cont2 -= 1;
    cont3 -= 1;
    cont4 += 1;
  }
}