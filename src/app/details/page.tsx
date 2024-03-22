import React from 'react';
import PokemonDetails from '../Component/PokemonDetails';
import { NextPage } from 'next';

const App: NextPage = () => {
  
  const pokemonId = 1; 

  return (
    <div className="App">
      <PokemonDetails id={pokemonId} />
    </div>
  );
};

export default App;