const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (gabarito, respstas, func) => {
  let counter = 0
  for (let index = 0; index < gabarito.length; index += 1) {
    const checkRespostas = func (gabarito[index], respstas[index])
    console.log(checkRespostas)
    counter += checkRespostas;    
  }
  return counter;
}

const func = (gabarito, respstas) => {
  if (gabarito === respstas)  return 1;
  if (respstas === 'N.A') return 0;
  if (gabarito !== respstas) return -0.5;
}

console.log(check(rightAnswers, studentAnswers, func))