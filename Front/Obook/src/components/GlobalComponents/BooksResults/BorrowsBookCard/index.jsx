import { useState } from "react";
import { endLoan } from "../../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import LoginPartModal from "../../Header/LoginModal/LoginPartModal/LoginPartModal";
import PopUpContact from "../../PopUpContactModal";
import { useNavigate, useParams } from 'react-router-dom';

const BorrowsBookCard=({
    userid,
    libraryid,
    status,
    isbn,
    image,
    author,
    title,
    loanid,
    synopsis,
})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [toggleLenderInfosModal, setToggleLenderInfosModal] = useState(false) 
    
    const handleCancelRequest = (e) => {
        console.log(e.target.value);
        dispatch(endLoan(e.target.value));
    };


    const handleDisplayUserDetails = (e) => {
        setToggleLenderInfosModal(true);
        console.log(toggleLenderInfosModal);
    };
    
    const libraryFilter = useSelector(state=>state.books.libraryFilter);
    console.log(libraryFilter);
    ;
    
    if (status === "Terminé"){
        return ''
    }
    return (
        <>
            <div value = {isbn} className="w-1/3 h-1/3 mobile:max-h-[225px] mobile:min-h-[225px] mobile:min-w-[105px] mobile:max-w-[105px] desktop:max-h-[300px] relative desktop:max-w-[200px] desktop:min-w-[200px] desktop:max-h-[280px] desktop:min-h-[280px] flex flex-col items-center mb-5 mx-3">
                <img onClick={() => navigate(`/book/${isbn}`)} className='w-full h-6/8 mobile:max-h-[160px] mobile:min-h-[160px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[230px] desktop:min-h-[230px] desktop:min-w-[160px] desktop:max-w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold desktop:max-h-[48px] mobile:max-h-[60px] mobile:max-w-[100px] text-ellipsis overflow-hidden desktop:text-base mobile:text-sm">{title?.split('(')[0]}</h1>
                {status === "En attente de validation" && <button className='text-[#FFF] bg-red-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleCancelRequest} >Annuler la demande</button>}
                {status === "En cours" && <button className='text-[#FFF] bg-green-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleDisplayUserDetails}>Voir les coordonnées</button>}
                {toggleLenderInfosModal && <PopUpContact libraryid={libraryid} handleQuit={()=>{setToggleLenderInfosModal(false)}} />}
            </div>
         </>
    )
}
export default BorrowsBookCard;


// <EscapeButton className='text-[#292F44] text-3xl m-3 cursor-pointer' onClick={setToggleLenderInfosModal(false)}/>