import Link from 'next/link'
import React from 'react'

export const Pageheader = () => {
  return (
    <>
        <div className='bg-customPokemonBg inline-block flex items-center justify-between p-5 '>
            <img src='https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg' title='pokemon' className='h-12'></img>
            <div className='flex gap-10' >
                <Link href="https://pokeapi.co/about" className='text-white'>About </Link>
                <Link href="https://pokeapi.co" className='text-white'>Documentation</Link>
                <Link href="https://pokeapi.co/docs/v2" className='text-white'>API</Link>
            </div>
        </div>
    </>
  )
}
