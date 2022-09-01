import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVisitedProfileData } from "../../actions/visitedUser";

const Library = ()=>{

    const params = useParams();
    const dispatch = useDispatch();
    const books = useSelector(state => state.visitedProfile.books);
    const tags = useSelector(state => state.visitedProfile.tags);
    const userInfos = useSelector(state => state.visitedProfile.userInfos);

    console.log("books", books);
    console.log("tags", tags);
    console.log("userInfos", userInfos);

    useEffect(() => {
        dispatch(fetchVisitedProfileData(params.username));
    }, []);
   
    if(!books){
        return (<p>PROBLÈME CHEF</p>)
    }

    return(
        <div>
            <p>Visited library component</p>
            {books.map(book =>
            console.log("un bouquin", {book})
            )}
        </div>
        
    )

};


export default Library;