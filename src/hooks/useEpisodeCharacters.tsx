import React, { useEffect, useState } from 'react'
import { getEpisodeCharacters } from '../api/rickAndMortyDB';
import { Character } from '../interfaces/characterInterface';

interface EpisodeCharacter{
    isLoading: boolean;
    character?: Character[];
}

export const useEpisodeCharacters = (characters: string[]) => {


    const [state, setState] = useState<EpisodeCharacter>({
        isLoading: true,
        character: undefined
    });

    const getCharacters = async () => {
        const response = await Promise.all(
            characters.map( async (characterRoute) => {
                return await getEpisodeCharacters(characterRoute.substring(characterRoute.lastIndexOf('/character')));
            })
        )

        setState({
            isLoading: false,
            character: response
        })
    }
    
    useEffect(() => {
        getCharacters();        
    }, []);

    return {
        ...state
    }
}
