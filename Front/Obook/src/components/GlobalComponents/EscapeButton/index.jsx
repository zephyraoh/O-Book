import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EscapeButton =({onClick})=>{


    return(
        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" onClick={onClick}/>
    )
}


export default EscapeButton;