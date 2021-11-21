import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';


import HorizontalSlider from '../components/HorizontalSlider';
import useCharacters from '../hooks/useCharacters';
import ElementCard from '../components/ElementCard';

const {width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
    const  { characters, episodes, locations, isLoading } = useCharacters();
    const {top} = useSafeAreaInsets();
    
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
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={characters}
                        renderItem={ ({ item }: any ) => <ElementCard element={ item }/> }
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Capitulos */}
                <HorizontalSlider title="Episodios" element={episodes}/>
                {/* Ubicaciones */}    
                <HorizontalSlider title="Ubicaciones" element={locations}/>

                
                
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
