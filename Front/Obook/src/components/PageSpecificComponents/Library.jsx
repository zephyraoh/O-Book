import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBorrowDemand, fetchVisitedProfileData } from "../../actions/visitedUser";
import BookCard from "../GlobalComponents/BooksResults/BookCard";


const Library = ()=>{
    //const
    const params = useParams();
    const dispatch = useDispatch();
    const books = useSelector(state => state.visitedProfile.books);
    const tags = useSelector(state => state.visitedProfile.tags);
    const userInfos = useSelector(state => state.visitedProfile.userInfos);

    //fonctions
    const BorrowDemand =(e)=> {
        dispatch(fetchBorrowDemand(e.target.value))
        console.log("demande de prêt dispatchée sur le livre ", e.target.value)
    }
    console.log("books", books);
    console.log("tags", tags);
    console.log("userInfos", userInfos);

    useEffect(() => {
        dispatch(fetchVisitedProfileData(params.username));
    }, []);
   
    return(
        <div className="bg-#ff253a"> 

            <p>Visited library component</p>
            {/* user Profile : picture, bio, tags, localisation zipcode */}
            
            <div className="p-2">
                <img className="rounded-full h-40 w-40" src={userInfos.profile_picture}></img>
                <h3 className="flex content-left pl-11 pt-2">{userInfos.username}</h3>
            </div>
            <div>
                {tags.map(tag => (
                    <div className="justify-end pr-2" key={tag.id}>{tag.label} </div>
                ))}
                <p>{userInfos.biography}</p>
                <p> {userInfos.localisation}</p>
                <p> {userInfos.zipcode}</p>
            </div>
            {books.map(book =>(
                <>
                    <BookCard key={book.id} {...book}/>
                    {book.is_available?<button value ={book.id} key={`availablebutton-${book.id}`} onClick={BorrowDemand} >faire une demande de prêt</button>:<p>indisponible</p>}

                </>
            )
            )}
        </div>
        
    )

};


export default Library;