let n = 5;
let matriz = '';
let cont = n;

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    matriz = '';
    for (let ii = 1; ii <= n; ii += 1) {
      if(ii >= cont) {
        matriz += '*';  
      }else {
        matriz += ' ';
      }
    }
    cont -= 1; 
    console.log(matriz);
  }
}

