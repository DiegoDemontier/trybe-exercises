let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumeroPar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i]%2 == 0) {
    somaNumeroPar += 1;
  }
}

if (somaNumeroPar === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(somaNumeroPar);
}
