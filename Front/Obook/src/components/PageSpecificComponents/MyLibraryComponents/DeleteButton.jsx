import { useDispatch } from "react-redux";
import { deleteBook } from "../../../actions/books";

const DeleteButton=({
    libraryid,
})=>{
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("book deleted (confirmer avec Justine pour la route à requêter côté back");
        // la route pour supprimer un livre n'existe pas : vérifier avec Justine
        // dispatch(deleteBook());
    }
    
    return (
        <>
            <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
         </>
    )
}
export default DeleteButton;