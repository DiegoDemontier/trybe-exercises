function techList(tech, name) {
  tech.sort();
  const teste = {};
  let a =[];
  
  tech.forEach(element => {
    a.push(teste['Tech'] = element)
    console.log(teste);
  });
  return a;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')

module.exports = techList;