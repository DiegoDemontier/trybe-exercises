let pecaXadrez = 'Rei';
let peca = pecaXadrez.toLowerCase();

switch(peca){
  case 'rei': console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez.')
    break;
  case 'dama': console.log('Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser.')
    break;
  case 'torre': console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
    break;
  case 'bispo': console.log('Move-se na diagonal, quantas casas quiser.')
    break;
  case 'cavalo': console.log('O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.')
    break;
  case 'peao': console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.')
    break;
    default: console.log('Peça inexistente.')
}
