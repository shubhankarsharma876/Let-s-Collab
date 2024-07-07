import api, { API_BASE_URL } from "@/config/api"
import * as types from "./ActionType"

export const getUserSubscription=(jwt) => {
    return async (dispatch) => {
        dispatch({ type: types.GET_USER_SUBSCRIPTION_REQUEST })
        try {
            const response = await api.get(`/api/subscriptions/user`,{
                headers:{
                    "Authorization":`Bearer ${jwt}`
                }
            })
            console.log("users subscription", response.data);
            dispatch({ type: types.GET_USER_SUBSCRIPTION_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch(
                {
                    type: types.GET_USER_SUBSCRIPTION_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}


export const upgradeSubscription=({planType}) => {
    return async (dispatch) => {
        dispatch({ type: types.UPGRADE_SUBSCRIPTION_REQUEST })
        try {
            const response = await api.patch(`/api/subscriptions/upgrade`,null,{
                params:{
                    planType:planType
                }
            })
            console.log("upgrade subscription", response.data);
            dispatch({ type: types.UPGRADE_SUBSCRIPTION_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch(
                {
                    type: types.UPGRADE_SUBSCRIPTION_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}


