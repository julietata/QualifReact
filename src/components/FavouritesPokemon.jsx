import PokemonCard from "./PokemonCard"
import '../tailwind.css'
import { Link } from 'react-router-dom'

function FavouritesPokemon() {

    const result = localStorage.getItem("favourites")
    const list = JSON.parse(result)

    if (list == null) {
        return (
            <div>
                <div className="w-full h-20 bg-black flex justify-between items-center">
                    <Link to="/pokemons">
                        <div className="mx-2 text-center flex items-center justify-center bg-white rounded-md w-40">
                            <h1 className="py-1 text-lg text-green-600 font-bold">Pokemon List</h1>
                        </div>
                    </Link>
                </div>
                <div>No Favourites!</div>
            </div>
        )
    }

    return (
        <div className="bg-green-100">
            <div className="bg-black h-20 py-4">
                <Link to="/pokemons">
                    <div className="mx-2 text-center flex items-center justify-center bg-white rounded-md w-40">
                        <h1 className="py-1 text-lg text-green-600 font-bold">Pokemon List</h1>
                    </div>
                </Link>
            </div>
            <div className="py-4 flex flex-wrap justify-center">
                {
                    list.map((e, idx) => {
                        return <PokemonCard key={idx} results={e} />
                    })
                }
            </div>
        </div>
    )
}

export default FavouritesPokemon