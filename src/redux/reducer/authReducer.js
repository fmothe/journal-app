
// {
//     uid: 'usuario',
//     nombre: 'nombre'
// }

import { types } from "../../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return{
                ...state,
                email: action.payload.email,
                uid: action.payload.uid,
            }
        case types.logout:
            return{}
        case types.register:
            return{
                password: action.payload.password,
                email: action.payload.email,
                pname: action.payload.pname,
                last_name: action.payload.last_name,
            }
        default:
            return state;
    }
}