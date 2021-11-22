import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const {width} = Dimensions.get('screen');

interface Props{
    title: string;
    description: string;
}


const InfoTextCard = ({title, description}: Props) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.descTitle}>{description}</Text>                    
        </View>
    )
}

export default InfoTextCard

const styles = StyleSheet.create({
    descTitle:{
        fontSize: 15,
        width: width * 0.4,
        marginLeft: 5
    },
    infoContainer:{
        flexDirection: 'row',
    },
    textTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15
    },
})
