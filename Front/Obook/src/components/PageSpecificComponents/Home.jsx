import BooksResults from "../GlobalComponents/BooksResults";
import UpdatesFeed from "../PageSpecificComponents/HomeComponents/UpdatesFeed";
import { useSelector } from "react-redux";
import Loading from "../GlobalComponents/Loading";
import { useEffect, useState } from "react";
const Home = ()=>{
const isSearchOn = useSelector(state=>(state.books.searchValue));
const loading = useSelector(state => state.books.loading);



    return(
        <>
            {!isSearchOn?
                <div className='min-h-screen pb-24'>
                    <BooksResults />
                    <UpdatesFeed/>
                </div>
                :
                <>
                 
                </>
                }
        </>
    )

};


export default Home;