import './NavigationPageComponent.css';
import arrowIcon from '../../static/icons/arrow.png';

type NavigationPageProps = {
    previous: (number | null);
    next: (number | null);
    onCallbackFn: (page: number) => void;
}


export function NavigationPage(props: NavigationPageProps) {

    const { previous, next, onCallbackFn } = props;

    const onNewRequestedPage = (newRequestedPage: (number | null)): void => {
        if ( newRequestedPage ) {
            onCallbackFn(newRequestedPage);
        }
    }

    return (
        <div className='navigation-container'>
            <button type='submit' style={{ visibility: (previous) ? 'visible' : 'hidden' }}
                onClick={ () => onNewRequestedPage(previous) }>
                <img src={ arrowIcon }  className='arrow-previous' alt='next' />
            </button>
            <button type='submit' style={{ visibility: (next) ? 'visible' : 'hidden' }}
                onClick={ () => onNewRequestedPage(next) }>
                <img src={ arrowIcon } className='arrow-next' alt='next' />
            </button>
        </div>
    );

}