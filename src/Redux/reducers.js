import { IS_LOGGED_IN, CHANGE_PRIMARY_COLOR, CHANGE_SECONDARY_COLOR } from "./constants";
import { yellow, blueGrey } from '@material-ui/core/colors'


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