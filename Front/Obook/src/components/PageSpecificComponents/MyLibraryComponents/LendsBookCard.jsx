import { acceptLoan, endLoan } from "../../../actions/books";
import { useDispatch, useSelector } from "react-redux";

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

    const handleAcceptRequest = (e) => {
        dispatch(acceptLoan(e.target.value));
    }

    const handleEndRequest = (e) => {
        dispatch(endLoan(e.target.value));
    }
    return (
        <>
            <div value = {isbn} className="mobile:max-h-[280px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center">
                <img className='mobile:max-h-[190px] mobile:max-w-[150px] desktop:max-h-[220px] desktop:w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold">{title}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {status === "En attente de validation" && <button className='text-[#FFF] bg-red-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleAcceptRequest} >Accepter la demande</button>}
                {status === "En cours" && <button className='text-[#FFF] bg-green-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleEndRequest}>Mettre fin au prêt</button>}
            </div>
         </>
    )
}
export default LendsBookCard;