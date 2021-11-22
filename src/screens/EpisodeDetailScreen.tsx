import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParams } from '../navigator/Navigation';
import { Episode } from '../interfaces/episodesInterface';
import { useEpisodeCharacters } from '../hooks/useEpisodeCharacters';
import ElementDetails from '../components/ElementDetails';


interface Props extends StackScreenProps<RootStackParams, 'EpisodeDetailScreen'>{};
interface Props {
    element: Episode;
}

const EpisodeDetailScreen = ({route}: Props) => {
    const episodeElement = route.params;
    const {isLoading, character} = useEpisodeCharacters(episodeElement.characters);
    return (
        <ElementDetails element={episodeElement} characters={character!} isLoading={isLoading}/>
    )
}

export default EpisodeDetailScreen