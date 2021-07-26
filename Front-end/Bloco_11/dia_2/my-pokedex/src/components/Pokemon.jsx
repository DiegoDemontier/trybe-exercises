import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-card" >
        <img className="pokemon-card-image" src={ pokemon.image } alt="" />
        <div>
          <h4 className="pokemon-card-name" > { pokemon.name } </h4>
          <h3 className="pokemon-card-type" > { pokemon.type } </h3>
        </div>
        <div className="pokemon-card-averageWeight" >
          <p className="averageWeight" > { pokemon.averageWeight.value }{ pokemon.averageWeight.measurementUnit } </p>
        </div>
      </div>
    )
  }
}

export default Pokemon;