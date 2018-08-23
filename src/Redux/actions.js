import { IS_LOGGED_IN } from "./constants";

export const setLoggedIn = (tf) => {
    return {
        type: IS_LOGGED_IN,
        payload: tf,
    }
}