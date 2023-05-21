import { Character } from '../entity/Character';
import { Film } from '../entity/Film';

export function CharacterCard( props: { character: Character } ) {
    const { character } = props;

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <p className='title'>{ character.name.toLowerCase() }</p>
                    <div className='card-content'>
                    <div className='card-content-row'>
                        <span className='card-content-title'>Birth Year</span>
                        <span className='card-content-value'>{ character.birth_year }</span>
                    </div>
                    <div className='card-content-row'>
                        <span className='card-content-title'>Gender</span>
                        <span className='card-content-value'>{ character.gender }</span>
                    </div>
                    <div className='card-content-row'>
                        <span className='card-content-title'>Planet</span>
                        <span className='card-content-value'>{ character.planet_name }</span>
                    </div>
                    <div className='card-content-row'>
                        <span className='card-content-title'>Fastest Vehicle</span>
                        <span className='card-content-value'>{ (character.fastest_vehicle_driven) ? character.fastest_vehicle_driven : 'Not a driver' }</span>
                    </div>
                    </div>
                </div>
                <div className='card-back'>
                    <p className='title'>films</p>
                    { character.films.map((film: Film) => {
                    return (
                        <div className='card-content-row' key={ film.name }>
                            <span className='card-content-film-name'>{ `${film.name}` }</span>
                            <span className='card-content-film-date'>{ `(${film.release_date})` }</span>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    );
}