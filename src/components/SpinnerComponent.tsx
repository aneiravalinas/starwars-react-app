
export function Spinner(props: { onLoad: boolean }) {
    
    if ( !props.onLoad ) {
        return null;
    }

    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <img className='spinner-logo' src='icons/spinner.png' alt='spinner' />
                <p className='spinner-text'>loading</p>
            </div>
        </div>
    );
}