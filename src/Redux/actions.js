import { IS_LOGGED_IN, CHANGE_PRIMARY_COLOR, CHANGE_SECONDARY_COLOR, ROOT_URL, GET_USER } from "./constants";
import axios from 'axios';

export const setLoggedIn = (tf) => {
    return {
        type: IS_LOGGED_IN,
        payload: tf,
    }
}

export const registerUser = (userData, callback) => (dispatch) => {
    const { username, email, password1, firstname, lastname } = userData;
    axios.post(`${ROOT_URL}/register`, {
        username,
        email,
        password: password1,
        firstName: firstname,
        lastName: lastname,
    }).then(response => {
        if(response.status === 200){
            callback();
            setLoggedIn(true);
        }
    }).catch(err => console.log(err));
}

export const loginUser = (userData, callback) => (dispatch) => {
    const { email, password } = userData;
    axios.post(`${ROOT_URL}/login`, {
        email,
        password
    }).then(response => {
        if(response.status === 200){
            callback();
            setLoggedIn(true);
        }
    })
}

export const postUserDetails = (userDetails, callback) => (dispatch) => {
    const { geb, ei, gluten, erdnüsse, lactose, männlich } = userDetails;
    axios.post(`${ROOT_URL}/user_details`, {
        geburtstag: geb,
        ei,
        gluten,
        erdnüsse,
        lactose,
        männlich
    })
    .then(res => {callback()})
    .catch(err => console.log(err));
}

export const getUser = (id, callback) => (dispatch) => {
    axios.get(`${ROOT_URL}/user/${id}`)
        .then(res => {
            callback();
            dispatch({ type: GET_USER, payload: res.data })
        })
        .catch(err => console.log(err))
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