import React, { useEffect, useState } from 'react'

const SearchBox = (props) => {
    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        const getData = setTimeout(() => {
            const filteredImages = props.all_pokemon.filter((image) => 
                image.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            
            if(filteredImages.length > 0){
                 props.set_pokemon_list(filteredImages);
            }
           
          },500);

        return () => clearTimeout(getData);
    
    }, [searchQuery])   
   
    

     //Filter boxes based on the search query
  return (
    <>
        <input 
            className=" focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none flex justify-center items-center w-full  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" 
            type="text" 
            aria-label="Filter projects"  
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Filter Pokemon...">
        </input>
    </>
  )
}

export default SearchBox
