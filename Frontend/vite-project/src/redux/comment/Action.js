import api, { API_BASE_URL } from "@/config/api"
import * as actionType from "./ActionType"

export const createComment = (commentData) => {
    return async (dispatch) => {
        dispatch({ type: actionType.CREATE_COMMENT_REQUEST });
        try {
            const response = await api.post(`/api/comments`, commentData)
            console.log("comment created", response.data);
            dispatch({
                type: actionType.CREATE_COMMENT_SUCCESS,
                comment: response.data
            })
        } catch (error) {

            dispatch({
                type: actionType.CREATE_COMMENT_FAILURE,
                comment: error.message
            })
            console.log(error);

        }
    }
}


export const deleteComment = (commentId) => {
    return async (dispatch) => {
        dispatch({ type: actionType.DELETE_COMMENT_REQUEST });
        try {
            const response = await api.post(`/api/comments/${commentId}`)
            console.log("comment created", commentId);
            dispatch({
                type: actionType.DELETE_COMMENT_SUCCESS,
                commentId
            })
        } catch (error) {

            dispatch({
                type: actionType.DELETE_COMMENT_FAILURE,
                comment: error.message
            })
            console.log(error);

        }
    }
}


