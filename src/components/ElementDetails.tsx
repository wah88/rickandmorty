import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Character} from '../interfaces/characterInterface';
import CharacterCard from './CharacterCard';
import { Episode } from '../interfaces/episodesInterface';
import { isEpisode, isLocation } from '../utils/guards';
import { Location } from '../interfaces/locationInterface';
import InfoTextCard from './InfoTextCard';

const windowWidth = Dimensions.get('window').width;

interface Props {
    element: ( Episode | Location);
    characters: Character[],
    isLoading: boolean
}

const ElementDetails = ({element, characters, isLoading}: Props) => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
                <View style={{alignItems: 'center', marginBottom: 20}}>                
                    <Text style={styles.originTitle}>
                    {
                        isEpisode(element) ? 
                        element.episode : 
                        isLocation(element) ? 
                        element.name : ''
                    }
                    </Text> 
                </View>

                <InfoTextCard 
                title={isEpisode(element) ? 'Título: ' : isLocation(element) ? 'Dimensión: ' : ''} 
                description={element.name}/>               

                <InfoTextCard 
                title={isEpisode(element) ? 'Lanzamiento: ' : isLocation(element) ? 'Tipo: ' : ''} 
                description={isEpisode(element) ? element.air_date : isLocation(element) ? element.type : ''}/>         
             
                
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.originTitle}>{isEpisode(element) ? 'Protagonistas' : isLocation(element) ? 'Residentes' : ''} </Text> 
                </View>

                <View style={styles.flatList}>
                    {
                        isLoading 
                        ? <ActivityIndicator color="grey" size={25} style={{marginTop: 20}}/>
                        : <FlatList
                            data={characters}
                            keyExtractor={(characters) => characters.id.toString()}
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

export default ElementDetails

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
