import EscapeButton from "../EscapeButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchLenderInfos } from "../../../actions/books";
import { useEffect } from "react";


const PopUpContact = ({
    handleQuit,
    libraryid,
}) => {

const dispatch= useDispatch();

useEffect(() => {
    console.log("DISPATCHING LENDER INFOS WITH ", libraryid)
    dispatch(fetchLenderInfos(libraryid));
}, []);

const lenderUserInfos = useSelector(state=>state.books.lenderUserInfos);
console.log('LENDER USER INFOS====>', lenderUserInfos);

    return (
       <div className="relative">
            <EscapeButton className=' left-0 text-[#292F44] text-3xl m-3 cursor-pointer' onClick={handleQuit}/>
            <div className="relative my-0 p-2 w-full max-w-md h-full md:h-auto bg-[#F5F5F5] rounded-md drop-shadow-lg ">
                
                <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Hello, voici mes coordonnées :</h3>
                <h4 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">{lenderUserInfos?.firstname} {lenderUserInfos?.lastname} </h4>
                <h4 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">{lenderUserInfos?.email}</h4>
                <h4 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400"> tél : {lenderUserInfos?.tel} </h4>
            </div>
        </div>
    )

}
export default PopUpContact;