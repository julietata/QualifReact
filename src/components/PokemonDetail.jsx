import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { gql, useQuery } from '@apollo/client'
import { SEARCH_POKEMON } from '../GraphQL/Query'
import { Link } from 'react-router-dom'

function PokemonDetail() {

    let { detail } = useParams()
    const { error, loading, data } = useQuery(SEARCH_POKEMON, { variables: { n: detail } })
    if (loading) return <div>Loading..</div>

    return (
        <div className="bg-green-100">
            <div className="w-full h-20 bg-black flex justify-between items-center">
                <Link to="/pokemons">
                    <div className="mx-2 text-center flex items-center justify-center bg-white rounded-md w-40">
                        <h1 className="py-1 text-lg text-green-600 font-bold">Pokemon List</h1>
                    </div>
                </Link>
                <Link to="/favourites">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-6" fill="green" viewBox="0 0 24 24" stroke="green">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </Link>
            </div>
            <div className="px-4 py-4 w-full max-w-screen-md mx-auto">
                <div className="text-center flex items-center justify-center">
                    <img src={data.pokemon.sprites.front_default} className="object-cover" />
                    <div>
                        <h1 className="ml-4 text-lg text-green-600 font-bold">{data.pokemon.name}</h1>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Abilities</h2>
                    <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {data.pokemon.abilities.map((e) => (
                            <li key={e.ability.name} className="col-span-1 flex shadow-sm rounded-md">
                                <div className="flex items-center w-full justify-center border border-gray-200 bg-white rounded-md truncate">
                                    <div className="px-10 py-4 text-sm truncate">
                                        <p className="text-gray-900 font-medium hover:text-gray-600">
                                            {e.ability.name}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Moves</h2>
                    <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {data.pokemon.moves.map((e) => (
                            <li key={e.move.name} className="col-span-1 flex shadow-sm rounded-md">
                                <div className="flex items-center w-full justify-center border border-gray-200 bg-white rounded-md truncate">
                                    <div className="px-10 py-4 text-sm truncate">
                                        <p className="text-gray-900 font-medium hover:text-gray-600">
                                            {e.move.name}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Types</h2>
                    <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {data.pokemon.types.map((e) => (
                            <li key={e.type.name} className="col-span-1 flex shadow-sm rounded-md">
                                <div className="flex items-center w-full justify-center border border-gray-200 bg-white rounded-md truncate">
                                    <div className="px-10 py-4 text-sm truncate">
                                        <p className="text-gray-900 font-medium hover:text-gray-600">
                                            {e.type.name}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail