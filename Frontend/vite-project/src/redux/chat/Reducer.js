
import { FETCH_CHAT_BY_PROJECT_SUCCESS, FETCH_CHAT_MESSAGE_FAILURE, FETCH_CHAT_MESSAGE_REQUEST, FETCH_MESSAGE_FAILURE, FETCH_MESSAGE_REQUEST, FETCH_MESSAGE_SUCCESS, SEND_MESSAGES_FAILURE, SEND_MESSAGES_REQUEST, SEND_MESSAGES_SUCCESS } from "./ActionType";

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null

}

export const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MESSAGE_REQUEST:
        case SEND_MESSAGES_REQUEST:
        case FETCH_CHAT_MESSAGE_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message]

            }
        case SEND_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message]
            }


        case FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat
            }

        case FETCH_MESSAGE_FAILURE:
        case SEND_MESSAGES_FAILURE:
        case FETCH_CHAT_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: error
            }

        default:
            return state;

    }

}


