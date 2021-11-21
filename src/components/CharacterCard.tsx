import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Character } from '../interfaces/characterInterface';


const windowWidth = Dimensions.get('window').width;

interface Props {
    character: Character;
}

const CharacterCard = ({character}: Props) => {
    const uri = character.image;
    return (
        <TouchableOpacity>

            <View style={{...styles.cardContainer, width: windowWidth * 0.4}}>
                <Image source={{uri}} style={styles.image} /> 
            </View>
            
        </TouchableOpacity>
    )
}

export default CharacterCard

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    image:{
        flex: 1,
        borderRadius: 15,
    },
})
