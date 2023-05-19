import { Film } from './Film';

export interface Character {
    name: string;
    birth_year: string;
    gender: string;
    planet_name: string;
    fastest_vehicle_driven: string;
    films: Film[];
}