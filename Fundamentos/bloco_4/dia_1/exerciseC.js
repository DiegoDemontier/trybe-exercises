let nota = Math.floor(Math.random()*100);
let estado;

if (nota >= 80) {
  estado = 'aprovado';
} else if (nota < 80 && nota >= 60) {
  estado = 'lista';
}else if (nota < 60) {
  estado = 'reprovada';
}

switch (estado) {
  case 'aprovado':
    console.log('Sua nota foi: ' + nota);
    console.log('Parabéns, você foi aprovada(o)');
    break;
  case 'lista':
    console.log('Sua nota foi: ' + nota);
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Sua nota foi: ' + nota);
    console.log('Você foi reprovada(o)');
    break;

  default:
    onsole.log('não se aplica');
}
