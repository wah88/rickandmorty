import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Character } from '../interfaces/characterInterface';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';


interface Props {
    element: (Character | Episode | Location);
    height?: number;
    width?: number;
}

//Init Defined Type Guards
function isEpisode(element: Character | Episode | Location): element is Episode {
    return (element as Episode).air_date !== undefined;
}

function isLocation(element: Character | Episode | Location): element is Location {
    return (element as Location).dimension !== undefined;
}

function isCharacter(element: Character | Episode | Location): element is Character {
    return (element as Character).gender !== undefined;
}
//End Defined Type Guards

const ElementCard = ( {element, height = 300, width = 300}: Props ) => {
    const uri = `https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`;
    return (
        <View style={{width, height, marginHorizontal: 7 }}>
            <View style={styles.imageContainer}>
                {
                    
                    isCharacter(element) ? 
                    <Image source={{uri}} style={styles.image} /> 
                    : isEpisode(element) ?
                    <View style={styles.episodeContainer}>
                        <Text style={styles.textTitle}>{element.name}</Text>
                        <Text style={styles.textTitle}>{element.air_date}</Text>
                    </View>
                    : isLocation(element) ?
                    <View style={styles.locationContainer}>
                        <Text style={styles.textTitle}>{element.name}</Text>
                        <Text style={styles.textTitle}>{element.type}</Text>
                    </View>
                    :
                    <View></View>
                }
                
            </View>
          
        </View>
    )
}

export default ElementCard

const styles = StyleSheet.create({
    episodeContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a84ff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    locationContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f53760',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 15,
        marginHorizontal: 15
    },
    image:{
        flex: 1,
        borderRadius: 15,
    },
    imageContainer:{
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
})
