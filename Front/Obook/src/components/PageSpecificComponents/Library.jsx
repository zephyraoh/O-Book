import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBorrowDemand, fetchVisitedProfileData, setVisitedProfileBookStatus } from "../../actions/visitedUser";
import BookCard from "../GlobalComponents/BooksResults/BookCard";
import { requestLoan } from "../../actions/books";
import { LoginModal } from "../GlobalComponents/Header/LoginModal/LoginModal";
import { toggleSignInModal } from "../../actions/user";

const Library = ()=>{
    //const
    const isLogged = useSelector(state => state.user.isLogged);
    const params = useParams();
    const dispatch = useDispatch();
    const books = useSelector(state => state.visitedProfile.books);
    console.log("les books du profil visité ==>", books)
    const tags = useSelector(state => state.visitedProfile.tags);
    const userInfos = useSelector(state => state.visitedProfile.userInfos);
    const isSignModalToggled =useSelector (state=>state.user.signInModal)

    //fonctions
    const handleClick =(e)=> {
        isLogged?(
            dispatch(requestLoan(e.target.value)),
            dispatch(setVisitedProfileBookStatus(e.target.value)),
            console.log("demande de prêt dispatchée sur le livre ", e.target.value)
        ):(
            dispatch(toggleSignInModal(true)),
            console.log("user pas connecté")
        );
    }
    console.log("books", books);
    console.log("tags", tags);
    console.log("userInfos", userInfos);

    useEffect(() => {
        dispatch(fetchVisitedProfileData(params.username));
    }, []);
   
    return(
        <div className='flex desktop:flex-row mobile:flex-col w-full h-full mobile:px-4 desktop:px-8 desktop:my-6 mobile:my-0 mobile:pb-24 desktop:pb-8'> 
            <div className="flex desktop:flex-col mobile:flex-row justify-evenly items-center desktop:h-3/4 desktop:w-1/3 mobile:w-full mobile:h-[250px]">
                <div className="flex w-1/3 flex-col justify-evenly items-center ">
                    <img className="block rounded-full desktop:max-h-[200px] desktop:min-h-[200px] desktop:max-w-[200px] desktop:min-w-[200px] mobile:max-h-[125px] mobile:min-h-[125px] mobile:max-w-[125px] mobile:min-w-[125px]" src={userInfos.profile_picture}></img>
                    <h3 className="text-2xl w-full font-bold p-2 m-3 text-black rounded-md">{userInfos.username}</h3>
                </div>
                <div className="flex-col items-center h-full mobile:py-4 mobile:px-2">
                    <p className="font-bold text-left text-xl desktop:block mobile:hidden">Biographie</p>
                    <p className="desktop:w-1/2 mobile:w-full desktop:text-left mobile:text-center">"{userInfos.biography||"N'a pas encore rédigé sa biographie !"}"</p> 
                    <p className="font-bold text-left text-xl pt-4 desktop:block mobile:hidden">Localisation</p>
                    <p className="desktop:text-left mobile:text-center">{userInfos.localisation} ({userInfos.zipcode})</p>
                    <p className='font-bold pt-4 text-left text-xl desktop:block mobile:hidden'>Aime</p>
                    <div className="h-10 grid grid-cols-2 gap-1 content-evenly desktop:pt-16 mobile:pt-16">
                        {tags.map(tag => {
                            const className = `desktop:text-base text-[#FFF] align-middle rounded-md mobile:text-xs mobile:p-1 ${tag.color} ${tag.hover}`;
                            return (
                                <div className={className} key={tag.id}>{tag.label} </div>
                            )
                        })} 
                    </div>
                </div>
            </div> 
            
            <div className="justift-self-center desktop:w-2/3 mobile:w-full h-full">
                <p className="desktop:text-3xl mobile:text-xl font-bold mb-4 desktop:mt-7 mobile:mt-4">Sa bibliothèque</p>
                <div className='flex flex-row flex-wrap h-full justify-evenly'>
                    {books.map(book =>(
                        <div className=" flex flex-col desktop:min-w-[200px] desktop:max-w-[200px] desktop:max-h-[300px] desktop:min-h-[300px] mobile:min-w-[120px] mobile:max-w-[120px] mobile:min-h-[230px] mobile:max-h-[230px] justify-between items-center relative mobile:mb-4">
                            <BookCard key={book.id} {...book}/>
                            {book.is_available && <button className=' block text-[#FFF] bg-[#097941] p-1 desktop:w-[170px] mobile:w-[105px] absolute desktop:bottom-[60px] desktop:right-[15px] mobile:bottom-[70px] mobile:right-[7px] rounded-b-lg' value ={book.libraryid} key={`availablebutton-${book.libraryid}`} onClick={handleClick}>Emprunter</button>}
                            {!book.is_available && <button className=' cursor-default block text-[#FFF] bg-[#FF0000] p-1 desktop:w-[170px] mobile:w-[105px] absolute desktop:bottom-[60px] desktop:right-[15px] mobile:bottom-[70px] mobile:right-[7px] rounded-b-lg' value ={book.libraryid} key={`availablebutton-${book.libraryid}`}>Indisponible</button>}
                            {!isLogged && isSignModalToggled && <LoginModal />}
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
        
        
    )

};


export default Library;