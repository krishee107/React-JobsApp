import { types } from "../types";
import { auth, googleAuthProvider, signInWithPopup, signOut } from "../firebase/firebase";

export const login = (uid, displayName) => ({
    type: types.login,
    payload: { uid, displayName }
});

export const logout = () => ({
    type: types.logout
});

export const startGoogleAuth = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user)
                dispatch(login(user.uid, user.displayName))
            })
            .catch((e) => {
                console.error(e)
            })
    }
}
export const startGoogleLogout = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};