let nota = 20; //Math.floor(Math.random()*100)

if (nota >= 90 && nota <= 100) {
  console.log('Nota: A')
} else if (nota >= 80 && nota <= 100) {
  console.log('Nota: B')
} else if (nota >= 70 && nota <= 100) {
  console.log('Nota: C')
} else if (nota >= 60 && nota <= 100) {
  console.log('Nota: D')
} else if (nota >= 50 && nota <= 100) {
  console.log('Nota: E')
} else if (nota < 50 && nota > 0) {
  console.log('Nota: F')
} else if (nota < 0 || nota > 100) {
  console.log('Nota inexistente')
}

