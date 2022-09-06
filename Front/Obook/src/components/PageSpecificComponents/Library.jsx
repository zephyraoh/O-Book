import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBorrowDemand, fetchVisitedProfileData } from "../../actions/visitedUser";
import BookCard from "../GlobalComponents/BooksResults/BookCard";
import { requestLoan } from "../../actions/books";


const Library = ()=>{
    //const
    const params = useParams();
    const dispatch = useDispatch();
    const books = useSelector(state => state.visitedProfile.books);
    const tags = useSelector(state => state.visitedProfile.tags);
    const userInfos = useSelector(state => state.visitedProfile.userInfos);

    //fonctions
    const handleClick =(e)=> {
        dispatch(requestLoan(e.target.value))
        console.log("demande de prêt dispatchée sur le livre ", e.target.value)
    }
    console.log("books", books);
    console.log("tags", tags);
    console.log("userInfos", userInfos);

    useEffect(() => {
        dispatch(fetchVisitedProfileData(params.username));
    }, []);
   
    return(
        <div className='flex desktop:flex-row mobile:flex-col w-full h-full mobile:px-4 desktop:px-8 desktop:my-6 mobile:my-4'> 
            <div className="flex flex-col justify-evenly items-center desktop:h-3/4 desktop:w-1/3 mobile:w-full">
                <div className="flex w-1/3 flex-col justify-evenly items-center ">
                    <img className="block rounded-full min-h-52 max-w-52" src={userInfos.profile_picture}></img>
                    <h3 className="text-2xl w-full font-bold p-2 m-3 bg-[#AB9F9F] text-black rounded-md">{userInfos.username}</h3>
                </div>
                <div className="flex-col place-content-evenly items-center">
                    <p className="font-bold text-xl">Biographie</p>
                    <p className="w-1/2 text-right">{userInfos.biography}</p> 
                    <p className="font-bold text-xl pt-4">Localisation</p>
                    <p className="text-lg"> {userInfos.localisation} {userInfos.zipcode}</p>
                    <p className='font-bold pt-4 text-xl'>Aime</p>
                    <div className="h-10 grid grid-cols-2 gap-1 content-evenly pt-20">
                        {tags.map(tag => {
                            const className = `desktop:text-base text-[#FFF] rounded-md text-xs ${tag.color} ${tag.hover}`;
                            return (
                                <div className={className} key={tag.id}>{tag.label} </div>
                            )
                        })} 
                    </div>
                </div>
            </div> 
            
            <div className="justift-self-center desktop:w-2/3 mobile:w-full h-full">
                <p className="text-3xl font-bold mb-4">Sa bibliothèque</p>
                <div className='flex desktop:flex-row flex-wrap mobile:flex-col h-full justify-evenly'>
                    {books.map(book =>(
                        <div className="justify-evenly desktop:min-w-[160px] desktop:max-w-[160px] desktop:max-h-[300px] desktop:min-h-[300px] relative pt-7 pl-7">
                            <BookCard key={book.id} {...book}/>
                            {book.is_available && <button className='text-[#FFF] bg-[#097941] p-1 w-[150px] absolute bottom-[52px] desktop:right-[6px] rounded-b-lg' value ={book.id} key={`availablebutton-${book.id}`} onClick={handleClick}>Emprunter</button>}
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
        
        
    )

};


export default Library;