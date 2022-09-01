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
            <div className="flex justify-evenly m-4 p-5 bg-[#AB9F9F] rounded-md w-1/2 items-center">
                <NavLink to={userNavLink}>
                    <img className="rounded-full h-30 w-30 max-w-[133px] max-h-[133px] min-w-[133px] min-h-[133px]" src={profile_picture}/>
                    <p>{username}</p>
                </NavLink>
                <div>
                    {status === 'En cours' && <p>A emprunté</p>}
                    {status === 'En attente de validation' && <p>A demandé</p>}
                    {status === 'Terminé' && <p>A restitué</p>}
                </div>
                <NavLink to={bookNavLink} className="flex-col" >
                    <img className="rounded-md h-52" src={image} alt={title} />
                </NavLink>
                <div>
                    <p>À</p>
                </div>
                <NavLink to = {lenderNavLink} >
                    <img className="rounded-full border-[#292F44] h-30 w-30 max-w-[133px] max-h-[133px] min-w-[133px] min-h-[133px]" src={lenderprofilepic}/>
                    <p>{lenderusername}</p>
                </NavLink>
            </div>
        )
    }
    
// }
export default Update;