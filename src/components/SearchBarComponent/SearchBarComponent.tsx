import './SearchBarComponent.css';
import { useRef, useState } from 'react';

type SearchProps<T extends (string | number)> = {
    initialSearchValue: T;
    onSubmit: (searchValue: T) => void;
}

export function SearchBar<T extends (string | number)>(props: SearchProps<T>) {
    const { initialSearchValue, onSubmit } = props;
    let previousSearchValue = useRef<T>(initialSearchValue);
    const [search, setSearch] = useState<T>(initialSearchValue);

    const handleSubmit = (): void => {
        if ( search !== previousSearchValue.current ) {
            previousSearchValue.current = search;
            onSubmit(search);
        }
    }

    return (
        <div className='search-container'>
            <input type='text' placeholder='Search character' 
            value={ search } 
            onChange={ (e) => setSearch(e.target.value as T)} 
            onKeyDown={ (e) => (e.key === 'Enter' ? handleSubmit() : null )} />
            <button type='submit'
                onClick={ () => handleSubmit() }>
                <img src='icons/search.png' alt='search'/>
            </button>
        </div>
    );
}