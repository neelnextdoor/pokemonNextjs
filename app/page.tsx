'use client'
import React, { useEffect, useState } from 'react'
import { Pageheader } from '@/app/components/header/page'
import Box from "@/app/components/Box/page"
import axios from 'axios'
import $ from 'jquery';




const page = () => {
    const [Images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query


    console.log(searchQuery);

   
    const getImages = async () => {
        try{
            let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200');
            setImages(pokemon.data.results);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getImages();
    }, [])
    

    useEffect(() => {
        
        const filteredImages = Images.filter((image) => 
            image.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(filteredImages);
        if(filteredImages.length > 0){
                setImages(filteredImages);
            
        }
        if(searchQuery.length < 1){
            getImages()
        }

    
    }, [searchQuery])   
   
    

     // Filter boxes based on the search query
    
    

       
  return (
    <>
        <Pageheader />
        <input className=" focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none flex justify-center items-center w-full  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects"  value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} placeholder="Filter Pokemon..."></input>
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {
                Images.map((elem,i)=>{
                    return <Box key={i} pokemon_url={elem.url} pokemon_name={elem.name} />
                })
            }
          
        </div>
        </div>
    </>
  )
}

export default page