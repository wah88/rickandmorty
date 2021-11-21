import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Character } from '../interfaces/characterInterface';

import { Episode } from '../interfaces/episodesInterface';
import ElementCard from './ElementCard';
import { Location } from '../interfaces/locationInterface';

interface Props {
    title?: string;
    element: (Character | Episode | Location)[];
}

const HorizontalSlider = ({ title, element }: Props) => {
    // console.log(element)
    return (
        <View style={{
            // backgroundColor: 'red', 
            height: (title) ? 260 : 220
            }}>
            
            {
                title && <Text style={{fontSize:25, fontWeight: 'bold', marginLeft: 5, marginVertical: 10}}>{title}</Text>
            }   

            <FlatList 
                data={element} 
                renderItem={ ({ item }: any )=> (
                    <ElementCard element={ item } width={200} height={200}/>
                )} 
                keyExtractor={( item )=> item.id.toString()}  
                horizontal={true}  
                showsHorizontalScrollIndicator={false}               
            />
        </View>
    )
}

export default HorizontalSlider

const styles = StyleSheet.create({})
