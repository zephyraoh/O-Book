import BooksResults from "../GlobalComponents/BooksResults";
import UpdatesFeed from "../PageSpecificComponents/HomeComponents/UpdatesFeed";
import { useSelector } from "react-redux";
import SearchBookResultstest from "../GlobalComponents/SearchBookResultstest";
const Home = ()=>{
const isSearchOn= useSelector(state=>(state.books.searchValue))

    return(
    <>
        {!isSearchOn?
            <>
                <BooksResults />
                <UpdatesFeed/>
            </>
            :
            <>
             <SearchBookResultstest/>
            </>
            }
    </>
)


};


export default Home;