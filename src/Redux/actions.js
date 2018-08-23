import { IS_LOGGED_IN, CHANGE_PRIMARY_COLOR, CHANGE_SECONDARY_COLOR } from "./constants";

export const setLoggedIn = (tf) => {
    return {
        type: IS_LOGGED_IN,
        payload: tf,
    }
}

export const changePrimaryColor = (primary) => {
    return{
        type: CHANGE_PRIMARY_COLOR,
        payload: primary
    }
}

export const changeSecondaryColor = (secondary) => {
    return{
        type: CHANGE_SECONDARY_COLOR,
        payload: secondary
    }
}