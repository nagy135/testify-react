import { createStore } from "redux";


export const LOG_IN_STATE = 'LOG_IN';
export const LOG_OUT_STATE = 'LOG_OUT';

const initialState = {
    loggedIn: true
};

function login(state = initialState, action){
    console.log('changing state');
    switch (action.type) {
        case LOG_IN_STATE:
            return {
                loggedIn: true
            };
        case LOG_OUT_STATE:
            return {
                loggedIn: false
            };
        default:
            return state;
    };
}

export default createStore(login);
