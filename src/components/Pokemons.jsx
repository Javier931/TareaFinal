import { IconSearch } from "@tabler/icons-react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { PokemonList } from "./PokemonList"

export const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")

    const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))


    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    setPokemonName(e.target.pokemonName.value.toLowerCase());

    //};

    const handleChangePokemonName = (e) => setPokemonName(e.target.value.toLowerCase())


    useEffect (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then(({data}) => setAllPokemons(data.results))
        .catch((err) => console.log(err));

    },[])
  return (
    <section className="p-4 py-5">
        <form>
            <div className="bg-white p-4 flex rounded-2xl text-lg">
                <input className="outline-none flex-1" type="text" autoComplete="off" placeholder="Search your Pokemon"  name="pokemonName" onChange={handleChangePokemonName}/>
                <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover: bg-red-400 transition-colors">
                    <IconSearch color="white" stroke={3} />
                </button>
            </div>
        </form>

        <PokemonList pokemons={pokemonsByName}/>
    </section>
  )
}
