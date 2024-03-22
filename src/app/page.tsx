"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Count from "./Component/Count";
import { useEffect, useState } from "react";
import Card from "./Component/Card";

const API_URL =  "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
export default function Home() {
const [pokemons,setPokemons] = useState([]);

  const fetchdata = async ()=>{
 const response = await fetch(`${API_URL}`);
 const data = await response.json();

 setPokemons(data.results);
 
  }
  useEffect(()=>{
  fetchdata()
  })
  return (
    <>
   {pokemons && pokemons.length > 0 && pokemons.map((pokemon : any)=>(
    <Card key={pokemon.name} pokemon={pokemon}/>
   ))}
    
    </>
  );
}

