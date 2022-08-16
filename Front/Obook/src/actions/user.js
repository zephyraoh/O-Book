export const SET_USER_FIELD = 'SET_USER_FIELD'; //change user field
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';

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

export const logout = () => ({
  type: LOGOUT,
});