import { NavLink } from "react-router-dom";

const BookOwner = ({
    username,
    zipcode,
    localisation,
    profile_picture,
})=>{

    const link = `/visitedlibrary/${username}`

    return(
        <div className="my-2">
            <NavLink to={link}>
                <img className='rounded-full w-32 h-32' src={profile_picture} alt={username} />
                <p>{username}</p>
                <p>{zipcode}, {localisation}</p>
            </NavLink>
        </div>
    )

};


export default BookOwner;