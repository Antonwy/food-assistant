import { IS_LOGGED_IN } from "./constants";

const userInitState = {
    name: '',
    isLoggedIn: false,
}

export const userData = (state=userInitState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return Object.assign({}, state, { isLoggedIn: action.payload });
        default:
            return state;
    }
}