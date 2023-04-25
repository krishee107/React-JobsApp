import { types } from "../types";
import { auth, googleAuthProvider, signInWithPopup } from "../firebase/firebase";

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