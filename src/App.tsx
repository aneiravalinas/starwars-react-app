import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Character } from './entity/Character';
import { Film } from './entity/Film';
import { Page } from './entity/Page';

function App() {

  const [page, setPage] = useState<Page<Character> | null>(null)

  useEffect( () => {
    fetchData()
    .then((page: Page<Character>) => setPage(page));
  }, [])

  const fetchData = async (page: number = 1) => {
    const result = await axios.get("http://localhost:8080/swapi-proxy/person-info", { headers: { Accept: 'application/json', "Content-Type": "application/json" } });
    return result.data;
  }

  const renderCard = (character: Character) => {
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
                <div className='card-content-row'>
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


  return (
    <main className='char-component'>
      <header className='header'>
        <h1>starwars swapi</h1>
      </header>
      <section className='char-section'>
        <div className='search-container'>
          <input type='text' placeholder='Search character' />
          <button type='submit'>
            <img src='icons/search.png' alt='search' />
          </button>
        </div>
        <div className='cards-container'>
          { page && page.results.map((character: Character) => renderCard(character))}
        </div>
        <div className='navigation-container'>
          <button type='submit'>
          <img src='icons/arrow.png' className='arrow-previous' alt='next' />
          </button>
          <button type='submit'>
            <img src='icons/arrow.png' className='arrow-next' alt='next' />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
