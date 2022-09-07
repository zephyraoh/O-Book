import { acceptLoan, endLoan } from "../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

const LendsBookCard=({
    libraryid,
    loanid,
    isbn,
    image,
    author,
    title,
    status,
    synopsis,
    is_available,
})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAcceptRequest = (e) => {
        dispatch(acceptLoan(e.target.value));
    }

    const handleEndRequest = (e) => {
        dispatch(endLoan(e.target.value));
    }
    return (
        <>
            <div value = {isbn} className="mobile:max-h-[212px] mobile:min-h-[212px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center relative m-2">
                <img onClick={() => navigate(`/book/${isbn}`)} className='mobile:max-h-[160px] mobile:min-h-[160px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[230px] desktop:min-h-[230px] desktop:min-w-[160px] desktop:max-w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold text-clip overflow-hidden">{title?.split('(')[0]}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {status === "En attente de validation" && <button className='text-[#FFF] bg-red-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[23px] mobile:bottom-[52px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleAcceptRequest} >Accepter la demande</button>}
                {status === "En cours" && <button className='text-[#FFF] bg-green-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[23px] mobile:bottom-[52px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleEndRequest}>Mettre fin au prêt</button>}
            </div>
         </>
    )
}
export default LendsBookCard;