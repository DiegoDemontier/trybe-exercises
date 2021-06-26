const email = (nome) => {
  const email = nome.toLowerCase().replace(' ', '_');
  return { nome, email: `${email}@trybe.com` };
};
/* split(' ').join('_')*/

const nome = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'),
    id2: nome('Luiza Drumond'),
    id3: nome('Carla Paiva'),
  };
  return employees;
};

console.log(nome(email));