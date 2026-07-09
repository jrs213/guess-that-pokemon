import { getPokemon } from "@/lib/pokemon";
import { getRandomPokemonId } from "@/utils/pokemon";

export default async function Home(){

  const id = getRandomPokemonId();
  const pokemon = await getPokemon(id);

  return (
    
    <main>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </main>

  );
}