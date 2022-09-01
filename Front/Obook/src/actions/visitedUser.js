export const SET_VISITED_PROFILE_DATA = 'SET_VISITED_PROFILE_DATA';
export const FETCH_VISITED_PROFILE_DATA = 'FETCH_VISITED_PROFILE_DATA';


export const setVisitedProfileData = (profileData)=>({
    type : SET_VISITED_PROFILE_DATA,
    payload: profileData,
});

export const fetchVisitedProfileData = (username)=>({
    type : FETCH_VISITED_PROFILE_DATA,
    payload: username,
})
