import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Character } from '../interfaces/characterInterface';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';
import EpisodeDetailScreen from '../screens/EpisodeDetailScreen';
import LocationDetailScreen from '../screens/LocationDetailScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Character;
  EpisodeDetailScreen: Episode;
  LocationDetailScreen: Location;
}

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTitle: '',
          headerBackTitle: 'Atrás',
          headerTintColor: '#48484a',
          headerStyle: { backgroundColor: 'transparent', borderBottomWidth: 0 },
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="EpisodeDetailScreen" component={EpisodeDetailScreen} />
      <Stack.Screen name="LocationDetailScreen" component={LocationDetailScreen} />
    </Stack.Navigator>
  );
}