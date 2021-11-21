import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigation';

import { Character } from '../interfaces/characterInterface';
import { useEpisodeDetails } from '../hooks/useEpisodeDetails';
import EpisodeDetails from '../components/EpisodeDetails';
import { SafeAreaView } from 'react-native-safe-area-context';




const heightDimension = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};
interface Props {
    element: Character;
}

const DetailScreen = ({route}: Props) => {
    const element = route.params;
    const uri = `https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`;
    
    const { isLoading, episode } = useEpisodeDetails( element.episode );
    
    
    return (
        <SafeAreaView>            
            {/* <Text>Detail Screen</Text>         */}
            <ScrollView>                                      
                    
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
                        <View style={styles.infoContainer}>
                            {/* <Icon name="rocket" color="grey" size={50}/> */}
                            {
                                isLoading 
                                ? <ActivityIndicator color="grey" size={25} style={{marginTop: 20}}/>
                                : <EpisodeDetails episodeInfo={episode!}/>
                            }
                            
                        </View>
                        
                    
                    <View></View>
                
            </ScrollView>  
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
        width: "100%",
        height: heightDimension * 0.7,   
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
    }
})
