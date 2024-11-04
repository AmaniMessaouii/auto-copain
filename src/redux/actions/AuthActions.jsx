import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './type'
import axios from 'axios'
import {URL} from "../../utils/GlobalURL"


export const LoginUser = (data) => (dispatch) => {
    axios.post(`${URL}/login`, data)
    
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            console.log("res", res)

        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response
            })
            console.log("err", err)

            // notification['error']({
            //     message: 'Login Failed !!',
            //     description:
            //         'The userName and Password you entred did not match our records. Please double-check and try again',
            // })

        })

}