import {Pokemon} from "@/types/pokemon"

export async function getPokemon(id: number): Promise<Pokemon> {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    if (!response.ok){
        throw new Error(`Failed to fetch Pokemon`);

    }
    return response.json();
}