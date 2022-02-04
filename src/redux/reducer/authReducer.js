
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

        default:
            return state;
    }
}