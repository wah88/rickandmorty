import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigation';

import { Character, EpisodeDetail } from '../interfaces/characterInterface';
import { useEpisodeDetails } from '../hooks/useEpisodeDetails';
import EpisodeDetails from '../components/EpisodeDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Episode } from '../interfaces/episodesInterface';




const {height, width} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};
interface Props {
    element: Character;
}

const DetailScreen = ({route}: Props) => {
    const element = route.params;
    const uri = `https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`;
    
    const { isLoading, episode } = useEpisodeDetails( element.episode );
    
    
    return (
        <SafeAreaView style={{flex:1}}>            
            <View style={{flex: 1}}>
                        <View style={styles.imageContainer}>
                            <View style={styles.imageBorder}>
                                <Image source={{uri}} style={styles.image} /> 
                            </View>                            
                        </View>                        
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Nombre: {element.name}</Text>
                            <Text style={styles.infoTitle}>Estado: {element.status}</Text>
                            <Text style={styles.infoTitle}>Genero: {element.gender}</Text>
                            <Text style={styles.infoTitle}>Especie: {element.species}</Text>
                        </View>

                        <View style={styles.flatList}>
                            <Text style={styles.textTitle}>Participación en los episodios:</Text>
                            {
                                isLoading 
                                ? <ActivityIndicator color="grey" size={25} style={{marginTop: 20}}/>
                                : <FlatList
                                    data={episode}
                                    keyExtractor={(ep) => ep.id.toString()}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({item}) => (
                                        <EpisodeDetails episodeInfo={item}/>
                                    )}
                                />
                            }
                        </View>
            </View>                             
                    
                        
        </SafeAreaView>
        
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    imageBorder:{
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
    },
    imageContainer:{
        flex: 1,
        width: "100%",
        height: height * 0.7,   
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
    },
    infoContainer:{
        marginVertical: 20,
        marginLeft: 15,
    },
    infoTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15
    },
    flatList:{
        flex: 1,
        width: width
    },
})
