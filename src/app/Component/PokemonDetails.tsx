"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Pokemon {
    sprites: {
      front_default: string;
    };
    name: string;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
    order: number;
  }
  
  const PokemonDetails: NextPage<{ id: number }> = ({ id }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          console.error('Error fetching Pokemon:', error);
        }
      };
  
      fetchPokemon();
  
     
      return () => {
     
      };
    }, [id]);
  
    if (!pokemon) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p>Number: {pokemon.order}</p>
      </div>
    );
  };
  
  export default PokemonDetails;