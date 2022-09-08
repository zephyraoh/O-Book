import { acceptLoan, endLoan, setNewBookStatus } from "../../../actions/books";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

const LendsBookCard=({
    libraryid,
    username,
    loanid,
    isbn,
    image,
    author,
    title,
    status,
    synopsis,
    is_available,
    profile_picture,
})=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAcceptRequest = (e) => {
        dispatch(acceptLoan(e.target.value));
        dispatch(setNewBookStatus(libraryid, "En attente de validation"));
    }

    const handleEndRequest = (e) => {
        dispatch(endLoan(e.target.value));
        dispatch(setNewBookStatus(libraryid, "En cours"));
    }

    if (status === "Terminé"){
        return ''
    }
    return (
        // rounded-full border-[#292F44] desktop:h-30 desktop:w-30 desktop:max-w-[133px] desktop:max-h-[133px] desktop:min-w-[133px] desktop:min-h-[133px] mobile:h-[70px] mobile:w-[70px] mobile:min-h-[70px] mobile:min-w-[70px]
        <>
            <div value = {isbn} className="w-1/3 h-1/3 mobile:max-h-[225px] mobile:min-h-[225px] mobile:min-w-[105px] mobile:max-w-[105px]   relative desktop:max-w-[200px] desktop:min-w-[200px] desktop:max-h-[280px] desktop:min-h-[280px] flex flex-col items-center mb-5 mx-3">
                <img onClick={() => navigate(`/book/${isbn}`)} className='w-full h-6/8 mobile:max-h-[160px] mobile:min-h-[160px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[230px] desktop:min-h-[230px] desktop:min-w-[160px] desktop:max-w-[160px] rounded-lg' src = { image }/>
                <img src = {profile_picture} onClick={() => navigate (`/visitedlibrary/${username}`)} className='rounded-full h-20 w-16 absolute -top-5 -right-4'/>
                <h1 className="font-semibold desktop:max-h-[48px] mobile:max-h-[60px] mobile:max-w-[100px] text-ellipsis overflow-hidden desktop:text-base mobile:text-sm">{title?.split('(')[0]}</h1>
                {/* <h4 className="mobile:hidden desktop:block">{author}</h4> */}
                {status === "En attente de validation" && <button className='text-[#FFF] bg-red-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleAcceptRequest} >Accepter la demande</button>}
                {status === "En cours" && <button className='text-[#FFF] bg-green-400 p-1 absolute desktop:w-[160px] mobile:w-[105px] S desktop:bottom-[48px] mobile:bottom-[65px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleEndRequest}>Mettre fin au prêt</button>}
            </div>
            {/* <div value = {isbn} className="mobile:max-h-[212px] mobile:min-h-[212px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[300px] desktop:max-w-[200px] flex flex-col items-center relative m-2">
                <img onClick={() => navigate(`/book/${isbn}`)} className='mobile:max-h-[160px] mobile:min-h-[160px] mobile:max-w-[105px] mobile:min-w-[105px] desktop:max-h-[230px] desktop:min-h-[230px] desktop:min-w-[160px] desktop:max-w-[160px] rounded-lg' src = { image }/>
                <h1 className="font-semibold text-clip overflow-hidden">{title?.split('(')[0]}</h1>
                <h4 className="mobile:hidden desktop:block">{author}</h4>
                {status === "En attente de validation" && <button className='text-[#FFF] bg-red-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[23px] mobile:bottom-[52px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleAcceptRequest} >Accepter la demande</button>}
                {status === "En cours" && <button className='text-[#FFF] bg-green-400 p-1 desktop:w-[160px] mobile:w-[105px] absolute desktop:bottom-[23px] mobile:bottom-[52px] rounded-b-lg mobile:text-xs desktop:text-base' value ={loanid} key={loanid} onClick={handleEndRequest}>Mettre fin au prêt</button>}
            </div> */}
         </>
    )
}
export default LendsBookCard;