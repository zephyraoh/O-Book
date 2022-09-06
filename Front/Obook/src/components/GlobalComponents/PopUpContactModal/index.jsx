import EscapeButton from "../EscapeButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchLenderInfos } from "../../../actions/books";
import { useEffect } from "react";


const PopUpContact = ({
    handleQuit,
    libraryid,
}) => {

const dispatch= useDispatch();

const lenderUserInfos = useSelector(state=>state.books.lenderUserInfos)
// console.log(lenderUserInfos);
useEffect(() => {
    dispatch(fetchLenderInfos(libraryid));
}, []);

    return (
       <>
            <EscapeButton className='text-[#292F44] text-3xl m-3 cursor-pointer' onClick={handleQuit}/>
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                </div>
                <div className="p-6 text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Hello, voici mes coordonnées :</h3>
                    <h4 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> </h4>
                    <h4 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> </h4>
                    <h4 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> </h4>
                </div>
            </div>
        </>
    )
}
export default PopUpContact;