import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigator/Navigation';

import { Character } from '../interfaces/characterInterface';
import { useEpisodeDetails } from '../hooks/useEpisodeDetails';
import EpisodeDetails from '../components/EpisodeDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InfoTextCard from '../components/InfoTextCard';




const {height, width} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};
interface Props {
    element: Character;
}

const DetailScreen = ({navigation, route}: Props) => {
    const {top} =  useSafeAreaInsets();
    const element = route.params;
    const uri = `https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`;

    
    const { isLoading, episode } = useEpisodeDetails( element.episode );
    
    
    return (         
        <View style={{flex: 1}}>
            <View style={styles.headerContainer}>     
                <View style={styles.imageContainer}>
                    <View style={styles.imageBorder}>
                        <Image source={{uri}} style={styles.image} /> 
                    </View>                            
                </View>     
                <View style={{marginVertical: 10}}>
                    <InfoTextCard title='Nombre:' description={element.name}/>
                    <InfoTextCard title='Estado:' description={element.status}/>
                    <InfoTextCard title='Género:' description={element.gender}/>
                    <InfoTextCard title='Especie:' description={element.species}/>
                    <InfoTextCard title='Ubicación:' description={element.location.name}/>
                    <InfoTextCard title='Planeta:' description={element.origin.name}/>
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
            
        </View>  
        
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    buttonBack:{
        left: 20,
        position: 'absolute',
        zIndex: 1000
    },
    headerContainer: {
        flex: 1,
        zIndex: 999
    },
    descTitle:{
        fontSize: 15,
        width: width * 0.4,
        marginLeft: 5
    },
    image:{
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
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
        flexDirection: 'row',
    },
    infoTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15
    },
    flatList:{
        flex: 1,
        width: width
    },
})
