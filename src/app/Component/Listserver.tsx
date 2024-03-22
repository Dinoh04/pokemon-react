"use client";
import { useState, useEffect } from 'react';

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

export default function PokemonListServer() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPokemons(data.results);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Pokémon List (Server)</h1>
            <ul>
                {pokemons.map((pokemon: any) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}