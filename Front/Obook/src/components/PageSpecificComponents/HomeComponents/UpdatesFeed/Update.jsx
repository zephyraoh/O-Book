const Update=({
    status,
    username,
    profile_picture,
    title,
})=>{
    
    if(status==="En attente de validation") {
        return (
            <div>
                <img src={profile_picture}/>
                <h4>{username} a demandé un prêt à Machin </h4>
                <h4>{title}</h4>
                <img src=""/>
            </div>
        )
    }
    
}
export default Update;