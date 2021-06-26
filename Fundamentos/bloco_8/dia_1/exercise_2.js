const sorteio = (numeroEscolhido, numeroSorteado) => {
  if (numeroSorteado === numeroEscolhido) {
    return "Parabéns você ganhou"
  } else {
    return "Tente novamente"
  }
}

const numeroSorteado = () => Math.trunc(Math.random()*6)


console.log(sorteio(2, numeroSorteado));