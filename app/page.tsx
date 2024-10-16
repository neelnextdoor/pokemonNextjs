'use client'
import React, { useEffect, useState } from 'react'
import { Pageheader } from '@/app/components/header/page'
import Box from "@/app/components/Box/page"
import axios from 'axios'
import SearchBox from '@/app/components/Searchbox/page'


const page = () => {
    const [pokemonLists, setPokemonLists] = useState([]);
    const [allPokemon, setallPokemon] = useState([]);    

    const pokemonList = async () => {
        try{
            let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200');
            
            setallPokemon(pokemon.data.results);
            setPokemonLists(pokemon.data.results);
        

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        pokemonList();
    }, [])

    
     
  return (
    <>
        <Pageheader />
        <SearchBox all_pokemon={allPokemon} set_pokemon_list={setPokemonLists} get_pokemon_list={pokemonLists} />
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {
                pokemonLists.map((elem,i)=>{
                    return <Box key={i} pokemon_url={elem.url} pokemon_name={elem.name} />
                })
            }
          
        </div>
        </div>
    </>
  )
}

export default page