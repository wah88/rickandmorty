import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RootStackParams } from '../navigator/Navigation';

const heightDimension = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ({route}: Props) => {
    const element = route.params;
    console.log(element.name)
    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
