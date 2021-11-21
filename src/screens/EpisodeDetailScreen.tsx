import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigation';
import { Episode } from '../interfaces/episodesInterface';


const heightDimension = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};
interface Props {
    element: Episode;
}

const EpisodeDetailScreen = ({route}: Props) => {
    const episodeElement = route.params;
    console.log(episodeElement);
    return (
        <View style={{backgroundColor: 'blue', flex: 1}}>
            <Text>EpisodeDetailScreen</Text>
        </View>
    )
}

export default EpisodeDetailScreen

const styles = StyleSheet.create({})
