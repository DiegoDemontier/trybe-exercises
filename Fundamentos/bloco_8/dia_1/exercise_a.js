const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (condicao) => {
  console.log(condicao())
}

doingThings(acordar);
doingThings(cafe);
doingThings(dormir);