import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RickAndMortyCharacter, Character } from '../interfaces/characterInterface';
import { getAllCharacters, getAllEpisodes, getAllLocations } from '../api/rickAndMortyDB';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';

const useCharacters = () => {


    const [isLoading, setIsLoading] = useState(true);

    const [characters, setCharacters] = useState<Character[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [locations, setLocations] = useState<Location[]>([])

    const getCharacters = async () => {
        const respCharacter = await getAllCharacters('/character');
        const respEpisodes = await getAllEpisodes('/episode');
        const respLocations = await getAllLocations('/location');

        setCharacters(respCharacter);
        setEpisodes(respEpisodes);
        setLocations(respLocations);

        setIsLoading(false);
    }

    useEffect(() => {
        getCharacters();
    }, [])
    return {
        characters,
        episodes,
        locations,
        isLoading
    }
}

export default useCharacters

const styles = StyleSheet.create({})
