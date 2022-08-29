//react Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
//possible ajout de classNames plus tard

//app Components
import SearchBar from '../../SearchForm/SearchBar/SearchBar';
import SearchForm from '../../SearchForm';
import { useDispatch } from 'react-redux';

//actions 
import {searchBooks, setSearchField } from '../../../../actions/books';
import EscapeButton from '../../EscapeButton';


const MobileMenu=()=>{

    const dispatch = useDispatch();
    const [isSearchBarActive, setSearchBarActive]= useState(false);
    
    const endSearch = () => {
        dispatch(setSearchField(''));
    }
    
    const handleClick = ()=>{
        setSearchBarActive(!isSearchBarActive)
        endSearch()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchBooks())
        endSearch()
    };

    return (
        <nav className='flex w-screen h-15 justify-center bg-[#EDE7DF] content-between fixed bottom-0 desktop:hidden'>
            {isSearchBarActive? 
                <>
                    <form className='w-full flex items-center justify-evenly mb-3' onSubmit={handleSubmit}>
                        <SearchBar className='search-form__input rounded-md h-10 w-11/12' />
                        <EscapeButton onClick={handleClick}/>
                    </form>
                </>
                 : 
                 <>
                    <FontAwesomeIcon className='h-10 p-6 text-[#292F44] block' icon= "magnifying-glass" onClick={handleClick} /> 
                    <NavLink to ="/"><FontAwesomeIcon className='h-10 p-6 text-[#292F44] block' icon= "house"/></NavLink>
                    <NavLink to ="/mylibrary"><FontAwesomeIcon className='h-10 p-6 text-[#292F44] block' icon= "fa-book-open" /></NavLink>
                    <NavLink to = "/account"><FontAwesomeIcon className='h-10 p-6 text-[#292F44] block' icon= "user" /></NavLink>
                </>
            }
        </nav>
    )
};
export default MobileMenu;

