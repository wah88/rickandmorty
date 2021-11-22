import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { useEpisodeCharacters } from '../hooks/useEpisodeCharacters';
import { Location } from '../interfaces/locationInterface';
import { RootStackParams } from '../navigator/Navigation';

const windowWidth = Dimensions.get('window').width;

interface Props extends StackScreenProps<RootStackParams, 'LocationDetailScreen'>{};
interface Props {
    element: Location;
}

const LocationDetailScreen = ({route}: Props) => {
    const locationElement = route.params;
    const {isLoading, character} = useEpisodeCharacters(locationElement.residents);
    return (
     
            <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.originTitle}>{locationElement.name}</Text> 
                </View>
                
                <View style={styles.infoContainer}>
                    <Text style={styles.textTitle}>Tipo:</Text>
                    <Text style={styles.descTitle}>{locationElement.type}</Text>                    
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.textTitle}>Dimensión:</Text>
                    <Text style={styles.descTitle}>{locationElement.dimension}</Text>
                </View>
                
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.originTitle}>Residentes</Text> 
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

export default LocationDetailScreen

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
