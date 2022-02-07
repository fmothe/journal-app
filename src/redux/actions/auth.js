import { types } from "../../types/types";
import { googleAuthProvider } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const startLoginWithUserIdPassword = (uid, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loginAction(1234, "federico"));
    }, 1500);
  };
};

export const registerNewUser = (
  username,
  password,
  email,
  pname,
  last_name
) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        await updateProfile(user, {displayName:pname});
        console.log(user);
      }
    );
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(
        loginAction(user.uid, user.displayName, user.email, user.photoURL)
      );
    });
  };
};

export const createNewUserAction = (
  username,
  password,
  email,
  pname,
  last_name
) => {
  return (dispatch) => {
    dispatch({
      type: types.register,
      payload: { username, password, email, pname, last_name },
    });
  };
};

export const loginAction = (uid, displayName, email, photoUrl) => ({
  type: types.login,
  payload: { uid, displayName, email, photoUrl },
});
