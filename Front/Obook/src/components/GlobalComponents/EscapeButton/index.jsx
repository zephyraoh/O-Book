import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EscapeButton =({onClick})=>{


    return(
        <FontAwesomeIcon className='text-[#292F44] text-xl m-3' icon="fa-solid fa-circle-xmark" onClick={onClick}/>
    )
}


export default EscapeButton;