import { Character } from '../interfaces/characterInterface';
import { Episode } from '../interfaces/episodesInterface';
import { Location } from '../interfaces/locationInterface';

//Init Defined Type Guards
export function isEpisode(element: Character | Episode | Location): element is Episode {
    return (element as Episode).air_date !== undefined;
}

export function isLocation(element: Character | Episode | Location): element is Location {
    return (element as Location).dimension !== undefined;
}

export function isCharacter(element: Character | Episode | Location): element is Character {
    return (element as Character).gender !== undefined;
}
//End Defined Type Guards