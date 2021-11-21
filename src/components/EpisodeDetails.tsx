import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Episode } from '../interfaces/episodesInterface';


interface Props {
    episodeInfo: Episode[]
}
const EpisodeDetails = ({episodeInfo}: Props) => {
    return (
        <View>
            <Text>Participación en los episodios:</Text>
            <Text>{episodeInfo[0].name}</Text>
        </View>
    )
}

export default EpisodeDetails

const styles = StyleSheet.create({})
