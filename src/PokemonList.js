import React from 'react'
import PokeImage from './PokeImage'
export default function PokemonList({pokemon}) {
    return (
      <div>{
        pokemon.map(p =>(

            <div key={p[0]}>
              {p[0]}
              <br/>
              <PokeImage url={p[1]}/>
            </div>

        ))
        }</div>
    )
  }
  

