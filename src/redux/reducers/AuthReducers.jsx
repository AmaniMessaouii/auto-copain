import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../actions/type'
let INIT_STATE = {

    UserData: null,
    errors: null,
}
const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log("success" ,action.payload)

            return {
                ...state,
                UserData: action.payload.resultData,
                errors: null
            };
        case LOGIN_FAIL:
            console.log("success" ,action.payload)

            return {
                ...state,
                UserData: null,
                errors: action
            };
            default:
                return state
        }
}
export default AuthReducer