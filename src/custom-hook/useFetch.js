import { useEffect, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
    API_REQUEST: "api_request",
    FETCH_DATA: "fetch_data",
    API_ERROR: "api_error"
}

const initialState = {
    data: [],
    loading: false,
    error: null
}


const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.API_REQUEST:
            return { ...state, data: [], loading: true, error: null }

        case ACTIONS.FETCH_DATA:
            return { ...state, data: action.payload, loading: false, error: null }
        case ACTIONS.API_ERROR:
            return { ...state, data: [], loading: false, error: action.payload }

        default:
            return state;
    }
}

function useFetch(url) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        axios.get(url).then(res => {
            dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data.data });
        }).catch(err => {
            dispatch({ type: ACTIONS.API_ERROR, payload: err.error });
        });
    }, [url]);

    return state;
}

export default useFetch;