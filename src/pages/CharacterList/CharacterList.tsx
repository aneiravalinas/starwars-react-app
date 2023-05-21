import './CharacterList.css';
import { useEffect, useState } from "react";
import { CharacterApiService } from "../../api/CharacterApiService";
import { CharacterCard } from "../../components/CharacterCardComponent/CharacterCardComponent";
import { NavigationPage } from "../../components/NavigationPageComponent/NavigationPageComponent";
import { SearchBar } from "../../components/SearchBarComponent/SearchBarComponent";
import { Spinner } from "../../components/SpinnerComponent/SpinnerComponent";
import { Character } from '../../entity/Character';
import { ErrorResponse } from "../../entity/ErrorResponse";
import { Page } from "../../entity/Page";



export function CharList() {

    const [page, setPage] = useState<Page<Character> | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect( () => {
        scrollToTop();
        fetchCharacterPage(searchValue, currentPage);
    }, [searchValue, currentPage])

    const fetchCharacterPage = (name: string, numberPage: number): void => {
        setLoading(true);
        CharacterApiService.retrieveCharacterPage(name, numberPage)
            .then((page: Page<Character>) => setPage(page))
            .catch((err: ErrorResponse) => setPage({ count: 0, previous: null, next: null, results: [] }))
            .finally(() => setLoading(false));       
    }

    const onSearchValueSubmit = (newSearchValue: string): void => {
        setCurrentPage(1);
        setSearchValue(newSearchValue);
    }

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='char-container'>
            <Spinner onLoad={ loading } />
            {  page &&
                (<section className='char-section'>
                    <SearchBar initialSearchValue={ searchValue } 
                        onSubmit={ onSearchValueSubmit } />
                    <div className='cards-container'>
                    { page.results.map((character: Character) => <CharacterCard key={ character.name } character={ character } /> ) }
                    </div>
                    <NavigationPage 
                        previous={ page.previous } 
                        next={ page.next } 
                        onCallbackFn={ (newRequestedPage: number) => setCurrentPage(newRequestedPage) }
                    />
                </section>)
            }
        </div>
    );

}