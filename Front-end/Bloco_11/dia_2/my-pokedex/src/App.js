import './App.css';
import React from 'react';
import Pokemons from './data'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <div>
      <Pokedex pokemons={ Pokemons } />
    </div>
  );
}

export default App;
