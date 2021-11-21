import axios from "axios";

import { API_HOST } from "../utils/constants";
import { RickAndMortyCharacter, Character } from '../interfaces/characterInterface';
import { RickAndMortyEpisodes, Episode } from '../interfaces/episodesInterface';
import { RickAndMortyLocation } from '../interfaces/locationInterface';

const rickAndMortyDB = axios.create({
    baseURL: API_HOST
})

export const getAllCharacters = async (path: string) => {
    try {
        const resp = await rickAndMortyDB.get<RickAndMortyCharacter>(path);
        return resp.data.results; 
    } catch (error) {
        throw error;
    }    
}


export const getAllEpisodes = async (path: string) => {
    try {
        const resp = await rickAndMortyDB.get<RickAndMortyEpisodes>(path);
        return resp.data.results; 
    } catch (error) {
        throw error;
    }    
}

export const getAllLocations = async (path: string) => {
    try {
        const resp = await rickAndMortyDB.get<RickAndMortyLocation>(path);
        return resp.data.results; 
    } catch (error) {
        throw error;
    }    
}

export const getEpisodeDetails = async (path: string) => {
    try {
        const resp = await rickAndMortyDB.get<Episode>(path);
        return resp.data; 
    } catch (error) {
        throw error;
    }    
}

export const getEpisodeCharacters = async (path: string) => {
    try {
        const resp = await rickAndMortyDB.get<Character>(path);
        return resp.data; 
    } catch (error) {
        throw error;
    }    
}