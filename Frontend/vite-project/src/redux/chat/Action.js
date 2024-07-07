import api, { API_BASE_URL } from "@/config/api"
import * as actionType from "./ActionType"

export const sendMessage=(messageData) => {
    return async (dispatch) => {
        dispatch({ type: actionType.SEND_MESSAGES_REQUEST });
        try {
            const response = await api.post("/api/messages/send",messageData)
            dispatch({type:actionType.SEND_MESSAGES_SUCCESS,
                message:response.data
            })
            console.log("message send",response.data);
        } catch (error) {
            
            dispatch({type:actionType.SEND_MESSAGES_FAILURE,
            error:error.message})
            console.log(error);

        }
    }
}


export const fetchChatByProject=(projectId) => {
    return async (dispatch) => {
        dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST });
        try {
            const response = await api.get(`/api/projects/${projectId}/chat`)
            console.log("fetch chat",response.data);
            dispatch({type:actionType.FETCH_CHAT_BY_PROJECT_SUCCESS,
                message:response.data
            })
        } catch (error) {
            
            dispatch({type:actionType.FETCH_CHAT_BY_PROJECT_FAILURE,
            error:error.message})
            console.log("error--",error);

        }
    }
}


export const fetchChatMessage=(projectId) => {
    return async (dispatch) => {
        dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST });
        try {
            const response = await api.get(`/api/projects/${projectId}/chat`)
            console.log("fetch chat",response.data);
            dispatch({type:actionType.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chatId,
                message:response.data
            })
        } catch (error) {
            
            dispatch({type:actionType.FETCH_CHAT_BY_PROJECT_FAILURE,
            error:error.message})
            console.log("error--",error);

        }
    }
}