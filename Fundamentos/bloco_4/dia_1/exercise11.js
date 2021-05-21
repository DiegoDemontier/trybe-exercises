let salario = 3000;
let ir;
let parcela;

if (salario <= 1556.94) {
  salario -= salario*0.08;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salario -= salario*0.09;
}else if (salario >= 2594.93 && salario <= 5189.82) {
  salario -= salario*0.11;
}else if (salario > 5189.82) {
  salario -= 570.88;
}

if (salario <= 1903.98) {
  ir = 1;
  parcela = 0;
} else if (salario >= 1903.99 && salario <= 2826.65) {
  ir = 0.075;
  parcela = 142.80;
} else if (salario >= 2826.66 && salario <= 3751.05) {
  ir = 0.15;
  parcela = 354.80;
} else if (salario >= 3751.06 && salario <= 4664.68) {
  ir = 0.225;
  parcela = 636.13;
} else if (salario > 4664.68) {
  ir = 0.275;
  parcela = 869.36;
}

if (parcela === 0){
  console.log(salario);
} else {
  let valorIR = (salario*ir - parcela);
  salario = salario - valorIR;
  console.log(salario);
}
