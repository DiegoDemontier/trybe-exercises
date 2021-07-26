import React from "react";
import Pokemon from "./Pokemon"

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <main className="pokemon-list" >
        {
          pokemons.map(( pokemon ) => (
            <Pokemon
            key={ pokemon.id }
            pokemon={ pokemon }
            />
          ))
        }
      </main>
    )
  }
}

export default Pokedex;