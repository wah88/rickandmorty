import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getAllCharacters, getAllEpisodes, getAllLocations } from '../api/rickAndMortyDB';
import { Character } from '../interfaces/characterInterface';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';

interface RickAndMortyState {
    characters: Character[];
    episodes: Episode[];
    locations: Location[];
}

const useCharacters = () => {


    const [isLoading, setIsLoading] = useState(true);

    const [rickAndMortyState, setRickAndMortyState] = useState<RickAndMortyState>({
        characters: [],
        episodes: [],
        locations: [],
    });

    const getCharacters = async () => {
        const characterPromise = getAllCharacters('/character');
        const episodesPromise = getAllEpisodes('/episode');
        const locationsPromise = getAllLocations('/location');

        const response = await Promise.all([characterPromise, episodesPromise, locationsPromise]);

        setRickAndMortyState({
            characters: response[0],
            episodes: response[1],
            locations: response[2]
        })

        setIsLoading(false);
    }

    useEffect(() => {
        getCharacters();
    }, [])
    return {
        ...rickAndMortyState,
        isLoading
    }
}

export default useCharacters

const styles = StyleSheet.create({})
