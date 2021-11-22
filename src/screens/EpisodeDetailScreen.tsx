import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigation';
import { Episode } from '../interfaces/episodesInterface';
import CharacterCard from '../components/CharacterCard';
import { useEpisodeCharacters } from '../hooks/useEpisodeCharacters';

const windowWidth = Dimensions.get('window').width;
interface Props extends StackScreenProps<RootStackParams, 'EpisodeDetailScreen'>{};
interface Props {
    element: Episode;
}

const EpisodeDetailScreen = ({route}: Props) => {
    const episodeElement = route.params;
    const {isLoading, character} = useEpisodeCharacters(episodeElement.characters);
    return (
     
            <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.originTitle}>{episodeElement.episode}</Text> 
                </View>
                
                <View style={styles.infoContainer}>
                    <Text style={styles.textTitle}>Título:</Text>
                    <Text style={styles.descTitle}>{episodeElement.name}</Text>                    
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.textTitle}>Lanzamiento:</Text>
                    <Text style={styles.descTitle}>{episodeElement.air_date}</Text>
                </View>
                
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.originTitle}>Protagonistas</Text> 
                </View>

                <View style={styles.flatList}>
                    {
                        isLoading 
                        ? <ActivityIndicator color="grey" size={25} style={{marginTop: 20}}/>
                        : <FlatList
                            data={character}
                            keyExtractor={(character) => character.id.toString()}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            renderItem={({item}) => (
                                <CharacterCard character={item}/>
                            )}
                        />
                    }
                </View>
               
                
            </SafeAreaView>
        
    )
}

export default EpisodeDetailScreen

const styles = StyleSheet.create({
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 5,
        width: windowWidth * 0.5
    },
    descTitle:{
        fontSize: 25,
        marginRight: 5,
        width: windowWidth * 0.4
    },
    flatList:{
        alignItems: 'center',
        flex: 1
    },
    infoContainer:{
        flexDirection: 'row',
        marginLeft: 10
    },
    originTitle:{
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 15
    }
})
