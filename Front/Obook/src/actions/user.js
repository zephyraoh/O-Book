export const SET_USER_FIELD = 'SET_USER_FIELD'; //change user field
export const SET_USER_DATA ='SET_USER_DATA';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SETCREATIONCONFIRMATION = 'SETCREATIONCONFIRMATION';
export const LOGOUT = 'LOGOUT';
export const DEL_ACCOUNT = 'DEL_ACCOUNT';
//à voir dans un second temps une fois branché au back
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
//séparation entre action demandant une confirmation et autres infos secondaires
export const CHANGE_USER_INFO_MISC = 'CHANGE_USER_INFO_MISC'; 
//zipcode, area, labels, bio, pic

export const setUserField = (value, name) => ({
	type: SET_USER_FIELD,
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

export const setCreationConfirmation = (data)=>({
	type : SETCREATIONCONFIRMATION,
	data,
})

export const logout = () => ({
  type: LOGOUT,
});