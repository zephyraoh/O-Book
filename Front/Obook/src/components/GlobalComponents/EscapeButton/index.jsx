import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EscapeButton =({onClick, className})=>{


    return(
        <FontAwesomeIcon className={className} icon="fa-solid fa-circle-xmark" onClick={onClick}/>
    )
}


export default EscapeButton;