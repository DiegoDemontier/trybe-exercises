let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
let multiplicador = 2;

for (let i = 0; i < array.length; i += 1) {
  if (i < (array.length - 1)) {
    novoArray.push(array[i]*array[i+1])
  } else {
    novoArray.push(array[i]*2)
  }
}

console.log(novoArray)

