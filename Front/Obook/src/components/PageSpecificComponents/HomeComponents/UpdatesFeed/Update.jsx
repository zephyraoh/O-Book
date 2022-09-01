const Update=({
    status,
    username,
    profile_picture,
    title,
    image,
    lenderusername,
    lenderprofilepic,
})=>{
    
    if(status==="En cours") {
        return (
            <div className="flex justify-between mx-6">
                <div>
                    <img className="rounded-full h-40 w-40" src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <div className="flex-col">
                    <img className="rounded-md h-52" src={image} alt={title} />
                    <p>a emprunté <span>{title}</span> à</p>
                </div>
                <div>
                    <img className="rounded-full h-40 w-40" src={lenderprofilepic}/>
                    <p>{lenderusername}</p>
                </div>
            </div>
        )
    }

    if(status==="En attente de validation") {
        return (
            <div className="flex justify-between mx-6">
                <div>
                    <img className="rounded-full h-40 w-40" src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <div className="flex-col">
                    <img className="rounded-md h-52" src={image} alt={title} />
                    <p>a demandé <span>{title}</span> à</p>
                </div>
                <div>
                    <img className="rounded-full h-40 w-40" src={lenderprofilepic}/>
                    <p>{lenderusername}</p>
                </div>
            </div>
        )
    }

    if(status==="Terminé") {
        return (
            <div className="flex justify-between mx-6">
                <div>
                    <img className="rounded-full h-40 w-40" src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <div className="flex-col">
                    <img className="rounded-md h-52" src={image} alt={title} />
                    <p>a restitué <span>{title}</span> à</p>
                </div>
                <div>
                    <img className="rounded-full h-40 w-40" src={lenderprofilepic}/>
                    <p>{lenderusername}</p>
                </div>
            </div>
        )
    }
    
}
export default Update;