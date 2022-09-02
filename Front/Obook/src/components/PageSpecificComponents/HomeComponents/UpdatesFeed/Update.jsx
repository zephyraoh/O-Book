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
    
    // if(status==="En cours") {
    //     return (
    //         <div className="flex justify-between mx-6 border-2-black">
    //             <div>
    //                 <img className="rounded-full h-40 w-40" src={profile_picture}/>
    //                 <p>{username}</p>
    //             </div>
    //             <div className="flex-col">
    //                 <img className="rounded-md h-52" src={image} alt={title} />
                    
    //                 <p>a emprunté <span>{title}</span> à</p>
    //             </div>
    //             <div>
    //                 <img className="rounded-full h-40 w-40" src={lenderprofilepic}/>
    //                 <p>{lenderusername}</p>
    //             </div>
    //         </div>
    //     )
    // }

    // if(status==="En attente de validation") {
    //     return (
    //         <div className="flex justify-evenly mx-6 m-4 p-5 bg-[#AB9F9F] rounded-md w-1/2 items-center">
    //             <div>
    //                 <img className="rounded-full border-[#292F44] h-30 w-30 max-w-[133px] max-h-[133px] min-w-[133px] min-h-[133px]" src={profile_picture}/>
    //                 <p>{username}</p>
    //             </div>
    //             <div className="flex-col">
    //                 <img className="rounded-md h-52" src={image} alt={title} />
    //                 <p>a demandé <span>{title}</span> à</p>
    //             </div>
    //             <div>
    //                 <img className="rounded-full h-30 w-30 max-w-[133px] max-h-[133px] min-w-[133px] min-h-[133px]" src={lenderprofilepic}/>
    //                 <p>{lenderusername}</p>
    //             </div>
    //         </div>
    //     )
    // }

    // if(status==="Terminé") {
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
                    <img className="rounded-md w-1/2 desktop:min-w-[170px] desktop:min-h-[250] mobile:min-w-[65px] mx-auto" src={image} alt={title} />
                </NavLink>
                <div className="desktop:block mobile:hidden">
                    <p>À</p>
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