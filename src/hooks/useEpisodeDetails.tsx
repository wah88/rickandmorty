import React, { useEffect, useState } from 'react'
import { getEpisodeDetails } from '../api/rickAndMortyDB';
import { Episode } from '../interfaces/episodesInterface';

interface EpisodeDetails{
    isLoading: boolean;
    episode?: Episode[];
}

export const useEpisodeDetails = (episodes: string[]) => {


    const [state, setState] = useState<EpisodeDetails>({
        isLoading: true,
        episode: undefined
    });

    //https://midu.dev/como-usar-async-await-con-array-prototype-map/
    const getEpisodeDetail = async () => {
        const response = await Promise.all(
            episodes.map( async (episodeRoute) => {
                return await getEpisodeDetails(episodeRoute.substring(episodeRoute.lastIndexOf('/episode')));
            })
        )
        setState({
            isLoading: false,
            episode: response
        })
    }
    
    useEffect(() => {
        getEpisodeDetail();        
    }, []);

    return {
        ...state
    }
}
