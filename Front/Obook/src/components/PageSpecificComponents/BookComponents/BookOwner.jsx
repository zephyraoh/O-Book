import { NavLink } from "react-router-dom";

const BookOwner = ({
    username,
    zipcode,
    localisation,
    profile_picture,
})=>{

    const link = `/visitedlibrary/${username}`

    return(
        <div className="my-2 mx-2 flex flex-col items-center mobile:max-w-[150px] desktop:max-w-[200px]">
            <NavLink to={link}>
                <img className='block mx-auto rounded-full w-32 h-32 mobile: w-24 mobile:h-24' src={profile_picture} alt={username} />
                <p className="font-bold">{username}</p>
                <p>{zipcode}, {localisation}</p>
            </NavLink>
        </div>
    )

};


export default BookOwner;