import { NavLink } from "react-router-dom";

const BookOwner = ({
    username,
    zipcode,
    localisation,
    profile_picture,
})=>{

    const link = `/visitedlibrary/${username}`

    return(
        <NavLink to={link}>
            <img src={profile_picture} alt={username} />
            <p>{username}</p>
            <p>{zipcode}</p>
            <p>{localisation}</p>
        </NavLink>
    )

};


export default BookOwner;