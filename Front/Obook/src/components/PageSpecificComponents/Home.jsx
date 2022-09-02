import BooksResults from "../GlobalComponents/BooksResults";
import UpdatesFeed from "../PageSpecificComponents/HomeComponents/UpdatesFeed";
import { useSelector } from "react-redux";
import Loading from "../GlobalComponents/Loading";
import { useEffect, useState } from "react";
const Home = ()=>{
const isSearchOn = useSelector(state=>(state.books.searchValue));
const loading = useSelector(state => state.books.loading);


// useEffect(() => {
//     setTimeout(() => {
//         setLoading(false);
//     }, "3000")
// }, []);

// if (loading){
//     // return <Loading/>
//     return <p>Veuillez patienter</p>
// }

    return(
        <>
            {!isSearchOn?
                <>
                    <BooksResults />
                    <UpdatesFeed/>
                </>
                :
                <>
                 
                </>
                }
        </>
    )

};


export default Home;