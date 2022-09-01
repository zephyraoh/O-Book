import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../../actions/books";
import { fetchVisitedProfileData } from "../../actions/visitedUser";

const Library = ()=>{

    const params = useParams();
    const dispatch = useDispatch();

    
    
    const books = useSelector(state => state.visitedProfile.profile.books);
    useEffect(() => {
        dispatch(fetchVisitedProfileData(params.username));

        // fetch la bibliothèque (id isbn) +infos du user côté back => /library/:username (GET)
        // set le visited user dans le state => state.visitedProfile
        
        // fetch les infos sur les livres de la bibliothèque côté ISBN => 
        // set les infos sur les livres dans le state
        //
    }, []);

    return(
        <p>Visited library component</p>
    
    
    )

};


export default Library;