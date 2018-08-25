import { IS_LOGGED_IN, CHANGE_PRIMARY_COLOR, CHANGE_SECONDARY_COLOR, GET_USER } from "./constants";
import { yellow, blueGrey } from '@material-ui/core/colors'


const userInitState = {
    user: {},
    isLoggedIn: false,
}

export const userData = (state=userInitState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return Object.assign({}, state, { isLoggedIn: action.payload });
        case GET_USER:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}

const defaultColors = {
    primary: yellow,
    secondary: blueGrey
}

export const colorManager = (state=defaultColors, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return Object.assign({}, state, {primary: action.payload})
        case CHANGE_SECONDARY_COLOR: 
            return Object.assign({}, state, {secondary: action.payload})
        default:
            return state;
    }
}