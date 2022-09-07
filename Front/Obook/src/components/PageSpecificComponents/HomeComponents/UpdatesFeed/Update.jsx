import { NavLink } from "react-router-dom";

const Update=({
    isbn,
    status,
    username,
    profile_picture,
    title,
    image,
    lenderusername,
    lenderprofilepic,
})=>{

    const bookNavLink = `/book/${isbn}`
    const userNavLink = `/visitedlibrary/${username}`;
    const lenderNavLink = `visitedlibrary/${lenderusername}`
        return (
            <div className="flex justify-evenly desktop:mx-auto desktop:my-4 mobile:my-2 mobile:mx-2 p-5 bg-[#AB9F9F] rounded-md desktop:w-3/4 mobile:w-6/7 items-center">
                <NavLink to={userNavLink}>
                    <img className="rounded-full desktop:h-30 desktop:w-30 desktop:max-w-[133px] desktop:max-h-[133px] desktop:min-w-[133px] desktop:min-h-[133px] mobile:h-[70px] mobile:w-[70px] mobile:min-h-[70px] mobile:min-w-[70px]" src={profile_picture}/>
                    <p>{username}</p>
                </NavLink>
                <div className="desktop:block mobile:hidden">
                    {status === 'En cours' && <p>A emprunté</p>}
                    {status === 'En attente de validation' && <p>A demandé</p>}
                    {status === 'Terminé' && <p>A restitué</p>}
                </div>
                <NavLink to={bookNavLink} >
                    <img className="rounded-md w-1/2 desktop:min-w-[170px] desktop:min-h-[250] mobile:min-w-[65px] mobile:max-w-[65px] mx-auto" src={image} alt={title} />
                </NavLink>
                <div className="desktop:block mobile:hidden">
                    <p>à</p>
                </div>
                <NavLink to = {lenderNavLink} >
                    <img className="rounded-full border-[#292F44] desktop:h-30 desktop:w-30 desktop:max-w-[133px] desktop:max-h-[133px] desktop:min-w-[133px] desktop:min-h-[133px] mobile:h-[70px] mobile:w-[70px] mobile:min-h-[70px] mobile:min-w-[70px]" src={lenderprofilepic}/>
                    <p>{lenderusername}</p>
                </NavLink>
            </div>
        )
    }
    
// }
export default Update;