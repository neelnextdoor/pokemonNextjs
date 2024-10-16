import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Box = (props) => {
  const [pokemonImage, setPokemonImage] = useState([])
    
  useEffect(() => {
    pokemonImages();
  
  },[props.pokemon_name])
  
  const pokemonImages = async () => {
    let images = `https://img.pokemondb.net/artwork/large/${props.pokemon_name}.jpg`;
    setPokemonImage(images)
    
  }

  const pokemonWithUppercase = (name) => {
    return name.toUpperCase()
  }


  return (
      <div id={props.pokemon_name} className="max-w-sm mx-auto my-5 p-5 border border-gray-300 shadow-lg rounded-full">
        <div className="h-24 w-full mb-4 relative rounded-full">
          {
            <img
              src={pokemonImage} // Path to your image
              alt="Image Description"
              layout="fill"
              objectFit="cover"
              className="rounded h-fit max-h-full">
            </img>
            }
        </div>
        <p className="text-gray-700 text-base items-center m-5"> {pokemonWithUppercase(props.pokemon_name)} </p>
      </div>
    
  );
};

export default Box;
