import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { Episode } from '../interfaces/episodesInterface';

const windowWidth = Dimensions.get('window').width;

interface Props {
    episodeInfo: Episode
}
const EpisodeDetails = ({episodeInfo}: Props) => {
    // console.log(episodeInfo)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.episodeContainer}>
                <Text                                
                style={styles.episodeTitle}
                >
                    {episodeInfo.name}
                </Text>
        </View>
        </View>
        
        
    )
}

export default EpisodeDetails

const styles = StyleSheet.create({
    episodeTitle:{
        fontSize: 15,
        textAlign: 'center',
    },
    episodeContainer:{
        flex: 1,
        borderRadius: 10,
        height: 40,
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 5,

    },
    mainContainer:{
        marginHorizontal: 20
    },
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})
