import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getAllCharacters, getAllEpisodes, getAllLocations } from '../api/rickAndMortyDB';
import { Character } from '../interfaces/characterInterface';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';

interface RickAndMortyState {
    characters?: Character[];
    episodes?: Episode[];
    locations?: Location[];
}

const useCharacters = () => {

    const nextCharacterPageUrl = useRef(`/character?page=1`);
    const nextEpisodePageUrl = useRef(`/episode?page=1`);
    const nextLocationPageUrl = useRef(`/location?page=1`);

    const [isLoading, setIsLoading] = useState(true);

    const [rickAndMortyState, setRickAndMortyState] = useState<RickAndMortyState>({
        characters: [],
        episodes: [],
        locations: [],
    });

    const getInfo = async () => {
        const characterPromise = (await getAllCharacters(nextCharacterPageUrl.current));
        const episodesPromise = (await getAllEpisodes(nextEpisodePageUrl.current));
        const locationsPromise = (await getAllLocations(nextLocationPageUrl.current));

        const [characters, episodes, locations] = await Promise.all([characterPromise, episodesPromise, locationsPromise]);
        
        nextCharacterPageUrl.current = characters.info.next;
        nextEpisodePageUrl.current = episodes.info.next;
        nextLocationPageUrl.current = locations.info.next;

        setRickAndMortyState({
            characters: characters.results,
            episodes: episodes.results,
            locations: locations.results
        })

        setIsLoading(false);
    }

    const getCharacters = async () => {
        try {
            const characterPromise = (await getAllCharacters(nextCharacterPageUrl.current));
            const [characters] = await Promise.all([characterPromise]);
            nextCharacterPageUrl.current = characters.info.next;
            setRickAndMortyState({
                characters: [...rickAndMortyState.characters!, ...characters.results],
                episodes: rickAndMortyState.episodes,
                locations: rickAndMortyState.locations
            })
        } catch (error) {
            throw error;
        }
        
    }

    const getEpisodes = async () => {
        try {
            const episodesPromise = (await getAllEpisodes(nextEpisodePageUrl.current));
            const [episodes] = await Promise.all([episodesPromise]);
            nextEpisodePageUrl.current = episodes.info.next;
            setRickAndMortyState({
                characters: rickAndMortyState.characters,
                episodes: [...rickAndMortyState.episodes!, ...episodes.results],
                locations: rickAndMortyState.locations
            })
        } catch (error) {
            throw error;
        }
        
    }

    const getLocations = async () => {
        try {
            const locationsPromise = (await getAllLocations(nextLocationPageUrl.current));
            const [locations] = await Promise.all([locationsPromise]);
            nextLocationPageUrl.current = locations.info.next;
            setRickAndMortyState({
                characters: rickAndMortyState.characters,
                episodes: rickAndMortyState.episodes,
                locations: [...rickAndMortyState.locations!, ...locations.results]
            })
        } catch (error) {
            throw error;
        }
        
    }

    useEffect(() => {
        getInfo();
    }, [])
    return {
        ...rickAndMortyState,
        isLoading,
        getInfo,
        getCharacters,
        getEpisodes,
        getLocations
    }
}

export default useCharacters

const styles = StyleSheet.create({})
