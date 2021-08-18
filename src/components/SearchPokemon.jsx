import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { SEARCH_POKEMON } from '../GraphQL/Query'
import SearchCard from "./SearchCard";
import '../tailwind.css'
import { Link } from 'react-router-dom'

function SearchPokemon() {

    let { name } = useParams()
    const { error, loading, data } = useQuery(SEARCH_POKEMON, { variables: { n: name } })
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")

    if (loading) return <div>Loading..</div>
    if (data == null) {
        return (
            <div>
                <div className="w-full h-20 bg-black flex justify-between items-center">
                    <Link to="/pokemons">
                        <div className="mx-2 text-center flex items-center justify-center bg-white rounded-md w-40">
                            <h1 className="py-1 text-lg text-green-600 font-bold">Pokemon List</h1>
                        </div>
                    </Link>
                    <form action="/pokemon/{search}">
                        <input type="text" placeholder="Search" className="mx-10 rounded-md value={search} w-4/5" onChange={e => { setSearch(e.target.value) }} />
                    </form>
                    <Link to="/favourites">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-6" fill="green" viewBox="0 0 24 24" stroke="green">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </Link>
                </div>
                <div className="bg-green-100">Pokemon Not Found!</div>
            </div>
        )
    }

    return (
        <div>
            <div className="w-full h-20 bg-black flex justify-between items-center">
                <Link to="/pokemons">
                    <div className="mx-2 text-center flex items-center justify-center bg-white rounded-md w-40">
                        <h1 className="py-1 text-lg text-green-600 font-bold">Pokemon List</h1>
                    </div>
                </Link>
                <form action={`/pokemon/${search}`}>
                    <input type="text" placeholder="Search" className="mx-10 rounded-md value={search} w-4/5" onChange={e => { setSearch(e.target.value) }} />
                </form>
                <Link to="/favourites">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-6" fill="green" viewBox="0 0 24 24" stroke="green">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </Link>
            </div>
            <div className="flex flex-wrap justify-center bg-green-100">
                {
                    <SearchCard pokemon={data.pokemon} />
                }
            </div>
        </div>
    )
}

export default SearchPokemon