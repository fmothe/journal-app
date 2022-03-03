import Swal from "sweetalert2";
import { types } from "../../types/types";
import { googleAuthProvider } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { finishLoadingAction, startLoadingAction } from "./ui";
import { notesLogout } from "./notes";

export const startLoginWithUserIdPassword = (email, password) => {
  return (dispatch) => {
    console.log("METHOD -- startLoginWithUserIdPassword -- START");
    dispatch(startLoadingAction());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(loginAction(user.email, user.uid));
        console.log("METHOD -- startLoginWithUserIdPassword -- SUCCESS");
        dispatch(finishLoadingAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoadingAction());
        Swal.fire('Error', err.message, 'error');
      });
  };
};

/**
 * Realiza el google login
 */
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

/**
 * Crea un nuevo usuario con los campos en firebase (email y password) updatea profile para agregar el nombre y apellido
 * @param {*} username
 * @param {*} password
 * @param {*} email
 * @param {*} pname
 * @param {*} last_name
 * @returns
 */
export const registerNewUser = (
  username,
  password,
  email,
  pname,
  last_name
) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: pname });
        dispatch(
          loginAction(user.uid, user.displayName, user.email, user.photoURL)
        );
      })
      .catch((err) => {console.log(err) 
        Swal.fire('Error', err.message, 'error');});
  };
};

/**Action Login */
export const loginAction = (email, uid) => ({
  type: types.login,
  payload: { email, uid },
});

export const startLogout = () => {
  return (dispatch) => {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        dispatch(logoutAction());
        dispatch(notesLogout())
      })
      .catch((err) => console.log(err));
  };
};

export const logoutAction = () => ({ type: types.logout });

// export const createNewUserAction = (
//   username,
//   password,
//   email,
//   pname,
//   last_name
// ) => {
//   return (dispatch) => {
//     dispatch({
//       type: types.register,
//       payload: { username, password, email, pname, last_name },
//     });
//   };
// };
