import React from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';


import HorizontalSlider from '../components/HorizontalSlider';
import useCharacters from '../hooks/useCharacters';
import ElementCard from '../components/ElementCard';

const {width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
    const  { characters, episodes, locations, isLoading, getInfo, getCharacters, getEpisodes, getLocations } = useCharacters();
    const {top} = useSafeAreaInsets();
    // const { characterList, loadCharacterItems } = useItemPaginated();
    
    if (isLoading){        
        return(
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{marginTop: top + 15}}>
                {/* Carousel de personajes principal */}
                <Text style={{fontSize:25, fontWeight: 'bold', marginLeft: 5, marginVertical: 10}}>Personajes</Text>
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={characters!}
                        renderItem={ ({ item }: any ) => <ElementCard element={ item } detailScreen='DetailScreen'/> }
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onEndReached={getCharacters}
                        // onEndReachedThreshold={0.1}
                    />
                </View>

                {/* Capitulos */}
                <HorizontalSlider title="Episodios" element={episodes!} detailScreen='EpisodeDetailScreen' refreshItems={getEpisodes}/>
                {/* Ubicaciones */}    
                <HorizontalSlider title="Ubicaciones" element={locations!} detailScreen='LocationDetailScreen' refreshItems={getLocations}/>

                
                
            </View>
        </ScrollView>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    carouselContainer:{
        height: 320,
    }
})
