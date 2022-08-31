const Update=({
    status,
    username,
    profile_picture,
    title,
})=>{
    
    if(status==="En cours") {
        return (
            <div>
                <div>
                    <img src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <p>a emprunté <span>{title}</span> à</p>
                <div>
                    <img src={profile_picture}/>
                    <p>utilisateur Y</p>
                </div>
            </div>
        )
    }

    if(status==="En attente de validation") {
        return (
            <div>
                <div>
                    <img src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <p>a demandé <span>{title}</span> à</p>
                <div>
                    <img src={profile_picture}/>
                    <p>utilisateur Y</p>
                </div>
            </div>
        )
    }

    if(status==="Terminé") {
        return (
            <div>
                <div>
                    <img src={profile_picture}/>
                    <p>{username}</p>
                </div>
                <p>a restitué <span>{title}</span> à</p>
                <div>
                    <img src={profile_picture}/>
                    <p>utilisateur Y</p>
                </div>
            </div>
        )
    }
    
}
export default Update;