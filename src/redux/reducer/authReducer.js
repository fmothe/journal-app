
// {
//     uid: 'usuario',
//     nombre: 'nombre'
// }

import { types } from "../../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                email: action.payload.email,
                photoUrl: action.payload.photoUrl,
            }
        case types.logout:
            return{}
        case types.register:
            return{
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email,
                pname: action.payload.pname,
                last_name: action.payload.last_name,
            }
        default:
            return state;
    }
}