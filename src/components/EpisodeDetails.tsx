import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Episode } from '../interfaces/episodesInterface';


interface Props {
    episodeInfo: Episode[]
}
const EpisodeDetails = ({episodeInfo}: Props) => {
    return (
            <>
                <Text style={styles.textTitle}>Participación en los episodios:</Text>
                {/* <FlatList 
                    // style={styles.episodeContainer}
                    data = {episodeInfo}
                    keyExtractor = {(episode) => episode.id.toString()}
                    renderItem={ ({item}) => <Text>{item.name}</Text> }
                    numColumns={3}
                    >
                </FlatList> */}
                <ScrollView 
                    style={styles.listContainer}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    >
                    {
                        episodeInfo.map(episode => (
                            <View key={episode.id} style={styles.episodeContainer}>
                                <Text                                
                                style={styles.episodeTitle}
                            >
                                {episode.name}
                                </Text>
                            </View>
                            
                        ))
                    } 
                </ScrollView>
                
            </>
        
    )
}

export default EpisodeDetails

const styles = StyleSheet.create({
    episodeTitle:{
        fontSize: 25,
        marginRight: 10,
        textAlign: 'center',
    },
    episodeContainer:{
        flex: 1,
        borderRadius: 10,
        height: 80 ,
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

        elevation: 11,

    },
    listContainer:{
        flex: 1,
        width: '90%'
    },
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})
