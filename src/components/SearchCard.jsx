import '../tailwind.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function SearchCard(props) {
    let pokemon = props.pokemon

    const [data, setData] = useState(null)

    useEffect(() => {
        const result = localStorage.getItem("favourites")
        const list = JSON.parse(result)
        if (list) {
            const temp = list.find(x => (x.id == pokemon.id))
            setData(temp)
        }
    }, [pokemon])

    const handleFav = async () => {
        const result = localStorage.getItem("favourites")
        let list = JSON.parse(result)

        if (data) {
            const idx = list.findIndex(x => (x.id == data.id))
            list.splice(idx, 1)
            localStorage.setItem("favourites", JSON.stringify(list))
            setData(null)
        }
        else {
            if (list == null) {
                list = []
            }
            list.push(pokemon)
            localStorage.setItem("favourites", JSON.stringify(list))
            setData(pokemon)
        }
    }

    return (
        <Link to={`/detail/${pokemon.name}`}>
            <div className="mx-4 my-4 w-80 h-30">
                <div className="text-center flex items-center justify-center bg-white rounded-md">
                    <Link to={`/detail/${pokemon.name}`} className="flex items-center">
                        <img src={pokemon.sprites.front_default} className="object-cover" />
                        <h1 className="ml-4 text-lg text-green-600 font-bold">{pokemon.name}</h1>
                    </Link>
                    <button onClick={handleFav}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6" fill={`${data ? 'green' : 'none'}`} viewBox="0 0 24 24" stroke="green">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard