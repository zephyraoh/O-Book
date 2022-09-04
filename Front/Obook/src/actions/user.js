export const SET_USER_FIELD = 'SET_USER_FIELD'; //change user field
export const SET_USER_MODIFY_ACCOUNT_FIELD = 'SET_USER_MODIFY_ACCOUNT_FIELD'; //change user field
export const SEND_MODIFIED_INFOS = 'SEND_MODIFIED_INFOS';
export const SET_USER_DATA ='SET_USER_DATA';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const CLEAR_PASSWORDS = 'CLEAR_PASSWORDS';
export const SETCREATIONCONFIRMATION = 'SETCREATIONCONFIRMATION';
export const LOGOUT = 'LOGOUT';
export const DEL_ACCOUNT = 'DEL_ACCOUNT';
//à voir dans un second temps une fois branché au back
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
//séparation entre action demandant une confirmation et autres infos secondaires
export const CHANGE_USER_INFO_MISC = 'CHANGE_USER_INFO_MISC'; 
export const SET_USER_LABEL = 'SET_USER_LABEL';
export const ADD_TAG_USER = 'ADD_TAG_USER';
export const REMOVE_TAG_USER = 'REMOVE_TAG_USER';
// actions requêtant au serveur les données user / another member
export const GET_MY_LIBRARY = 'GET_MY_LIBRARY'; 
export const GET_MEMBER_PROFILE = 'GET_MEMBER_PROFILE'
//zipcode, area, labels, bio, pic
// toggle de la modale de connexion/inscription
export const TOGGLE_SIGN_IN_MODAL = 'TOGGLE_SIGN_IN_MODAL';

export const setUserField = (value, name) => ({
	type: SET_USER_FIELD,
	value,
	name,
});
export const setUserModifyAccountField = (value, name) => ({
	type: SET_USER_MODIFY_ACCOUNT_FIELD,
	value,
	name,
});
export const setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});

export const signIn = () => ({
	type: SIGN_IN,
});

export const signUp = () => ({
	type: SIGN_UP,
});

export const clearPasswords = () =>({
	type: CLEAR_PASSWORDS,
});

export const setCreationConfirmation = (data)=>({
	type : SETCREATIONCONFIRMATION,
	data,
})

export const logOut = () => ({
	type: LOGOUT,
});

export const SetUserLabel = (label) =>({
	type: SET_USER_LABEL,
	payload: label,
})
export const getMyLibrary = () => ({
	type: GET_MY_LIBRARY,
});

export const getMemberProfile = (username) => ({
	type: GET_MEMBER_PROFILE,
	payload: username
});

export const sendModifiedInfos = (data) => ({
	type: SEND_MODIFIED_INFOS,
	data,
});

export const toggleSignInModal = (boolean) =>({
	type: TOGGLE_SIGN_IN_MODAL,
	payload: boolean
});

export const addTagUser = (tag) =>({
	type: ADD_TAG_USER,
	payload: tag
});

export const removeTagUser = (tag) =>({
	type: REMOVE_TAG_USER,
	payload: tag
});