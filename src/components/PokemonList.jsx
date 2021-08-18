import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {LOAD_POKEMONS} from '../GraphQL/Query'
import PokemonCard from './PokemonCard'
import '../tailwind.css'
import { Link } from 'react-router-dom'

function PokemonList() {

    const {error, loading, data} = useQuery(LOAD_POKEMONS)
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (data){
            setPokemons(data.pokemons.results)
        }
    }, [data])

    if (loading) return <div>Loading..</div>
    return (
        <div>
            <div className="w-full h-20 bg-black flex justify-between items-center">
                <form action={`/pokemon/${search}`}>
                    <input type="text" placeholder="Search" className="mx-10 rounded-md value={search} w-4/5" onChange={e => {setSearch(e.target.value)}} />
                </form>
                <Link to="/favourites">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-6" fill="green" viewBox="0 0 24 24" stroke="green">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </Link>
            </div>
            <div className="flex flex-wrap justify-center bg-green-100">
            {
                data.pokemons.results.map((e) => {
                    return <PokemonCard key={e.id} results={e}/>
                })
            }
            </div>
        </div>
    )
}

export default PokemonList