import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import ElementDetails from '../components/ElementDetails';
import { useEpisodeCharacters } from '../hooks/useEpisodeCharacters';
import { Location } from '../interfaces/locationInterface';
import { RootStackParams } from '../navigator/Navigation';


interface Props extends StackScreenProps<RootStackParams, 'LocationDetailScreen'>{};
interface Props {
    element: Location;
}

const LocationDetailScreen = ({route}: Props) => {
    const locationElement = route.params;
    const {isLoading, character} = useEpisodeCharacters(locationElement.residents);
    return (
        <ElementDetails element={locationElement} characters={character!} isLoading={isLoading}/>        
    )
}

export default LocationDetailScreen