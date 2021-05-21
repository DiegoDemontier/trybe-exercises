let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayDecrescente = [];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

for(let i = (array.length - 1); i >= 0 ; i -= 1) {
  arrayDecrescente.push(array[i]);
}

console.log(arrayDecrescente);

