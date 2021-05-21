let nota = Math.floor(Math.random()*100);

if (nota >= 80) {
  console.log('Sua nota foi: ' + nota)
  console.log('Parabéns, você foi aprovada(o)')
} else if (nota >= 60 && nota < 80) {
  console.log('Sua nota foi: ' + nota)
  console.log('Você está na nossa lista de espera')
}else if (nota < 60) {
  console.log('Sua nota foi: ' + nota)
  console.log('Você foi reprovada(o)')
}