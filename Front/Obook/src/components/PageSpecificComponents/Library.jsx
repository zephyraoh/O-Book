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
        <div> 
            <div className="flex flex-nowrap flex justify-evenly pr-3 pl-3 pt -10">
                <div className="flex w-1/3 flex-col justify-evenly items-center ">
                    <img className="block rounded-full h-52 w-52" src={userInfos.profile_picture}></img>
                    <h3 className="text-2xl w-1/2 font-bold p-2 m-3 bg-[#AB9F9F] text-black rounded-md">{userInfos.username}</h3>
                </div>
                {/* <div className="justify-self: center;"> */}
                <div className="flex-col place-content-evenly">
                    <p className="font-bold text-xl">Biographie</p>
                    <p className="w-1/2 text-right">{userInfos.biography}</p> 
                    <p className="font-bold text-xl pt-4">Localisation</p>
                    <p className="text-lg"> {userInfos.localisation}, {userInfos.zipcode}</p>
                    <p className='flex font-bold pt-4 text-xl'>Aime</p>
                <div class="h-10 grid grid-cols-2 gap-1 content-evenly pt-20">
                    {tags.map(tag => (
                         <div className=" desktop:text-base bg-[#292F44] text-[#F5F5F5] rounded-md" key={tag.id}>{tag.label} </div>
                    ))} 
                </div>
                </div>
                    {/* <p className="font-bold text-xl pt-4">Localisation</p>
                    <p className="text-lg"> {userInfos.localisation}, {userInfos.zipcode}</p> */}
            </div> 
                    {/* <p className='font-bold pt-4 text-xl'>Aime</p>
                    {tags.map(tag => (
                        <div className="p-2 m-2 desktop:text-base bg-[#292F44] text-[#F5F5F5] rounded-md" key={tag.id}>{tag.label} </div>
                    ))} */}
                
            <div className="justift-self-center w-2/3 pt-20 pl-16">
                <p className="text-3xl font-bold mb-4">Sa bibliothèque</p>
                <div className='flex flex-wrap justify-evenly'>
                {books.map(book =>(
                    <div className="flex flex-row items-center h- w-1/5 max-h-[300px] relative pt-7">
                    <BookCard key={book.id} {...book}/>
                    {book.is_available && <button className='text-[#FFF] bg-[#097941] p-1 w-[150px] absolute top-[190px] left-[51px] rounded-b-lg' value ={book.id} key={`availablebutton-${book.id}`} onClick={handleClick} >Emprunter</button>}
                    </div>
                    )
                )}
                </div>
            </div>
        </div>
        
        
    )

};


export default Library;