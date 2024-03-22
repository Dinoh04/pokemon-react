'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    pokemon : any
}

export default function Card({pokemon } : Props) {
    const router = useRouter();
    const handleClick = (route: string) => {
        router.push(route);
    };
  return (
    <>
     <table>
        <thead>
            <tr>
                <th>Pokemon name</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{pokemon.name}</td>
                <td>{pokemon.url}</td>
            </tr>
          
        </tbody>
        
    </table>
    <button type="button" onClick={() => handleClick("/details")}>click</button>
    </>
  )
}
