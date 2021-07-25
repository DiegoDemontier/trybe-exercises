let n = 5;
let linha = '';
let cont = n;

//if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    linha = '';
    for (let ii = 1; ii <= n; ii += 1) {
      if(ii >= cont) {
        linha += '*';  
      }else {
        linha += ' ';
      }
    }
    console.log(linha);
    cont -= 1; 
  }


//}

