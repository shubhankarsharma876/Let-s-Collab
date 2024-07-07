import api, { API_BASE_URL } from "@/config/api"

import { ASSIGNED_ISSUE_TO_USER_FAILURE, ASSIGNED_ISSUE_TO_USER_REQUEST, ASSIGNED_ISSUE_TO_USER_SUCCESS, CREATE_ISSUE_FAILURE, CREATE_ISSUE_REQUEST, CREATE_ISSUE_SUCCESS, DELETE_ISSUE_REQUEST, DELETE_ISSUE_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS,  UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType";
import { DELETE_COMMENT_FAILURE } from "../comment/ActionType";

export const fetchIssues=(id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_REQUEST })
        try {
            const response = await api.get(`/api/issues/project/${id}`)
            console.log("fetch issues", response.data);
            dispatch({ type: FETCH_ISSUES_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: FETCH_ISSUES_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}




export const fetchIssuesById=(id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST })
        try {
            const response = await api.get(`/api/issues/${id}`)
            console.log("fetch issues by id", response.data);
            dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: FETCH_ISSUES_BY_ID_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}

export const createIssue=(issueData)=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_ISSUE_REQUEST})

        try{
            const response = await api.post("/api/issues",issueData)
            console.log("fetch issues by id", response.data);
            dispatch({ type: CREATE_ISSUE_SUCCESS, 
                issues: response.data })
                console.log('issue created succesfully',response.data);
        } catch (error) {
            dispatch(
                {
                    type: CREATE_ISSUE_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}



export const updateIssueStatus=({id,status}) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST })
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`)
            console.log("update issues status", response.data);
            dispatch({ type: UPDATE_ISSUE_STATUS_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: UPDATE_ISSUE_STATUS_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}



export const assignedUserToIssue=({issueId,userId}) => {
    return async (dispatch) => {
        dispatch({ type: ASSIGNED_ISSUE_TO_USER_REQUEST })
        try {
            const response = await api.put(`/api/issues/${issueId}/status/${userId}`)
            
            dispatch({ type: ASSIGNED_ISSUE_TO_USER_SUCCESS, issues: response.data })
            console.log("assigned issue ---", response.data);
        } catch (error) {
            dispatch(
                {
                    type: ASSIGNED_ISSUE_TO_USER_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}

export const deleteIssue=(issueId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_ISSUE_REQUEST })
        try {
            const response = await api.delete(`/api/issues/${issueId}`)
            console.log("deleted issue ---", response.data);
            dispatch({ type: DELETE_ISSUE_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: DELETE_COMMENT_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}