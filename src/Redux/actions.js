import { IS_LOGGED_IN, CHANGE_PRIMARY_COLOR, CHANGE_SECONDARY_COLOR, ROOT_URL, GET_USER, GET_DAILY_FOOD, SET_USER } from "./constants";
import axios from 'axios';

export const setLoggedIn = (tf) => {
    return {
        type: IS_LOGGED_IN,
        payload: tf,
    }
}

export const registerUser = (userData, callback) => (dispatch) => {
    const { email, password1, vorname, nachname } = userData;
    console.log(userData)
    axios.post(`${ROOT_URL}/register`, {
        email,
        password: password1,
        firstName: vorname,
        lastName: nachname,
    }).then(response => {
            dispatch({ type: SET_USER, payload: response.data })
            dispatch({ type: IS_LOGGED_IN, payload: true })
            callback(response.data);
    }).catch(err => console.log(err));
}

export const loginUser = (userData, callback) => (dispatch) => {
    const { email, password } = userData;
    axios.post(`${ROOT_URL}/login`, {
        email,
        password
    }).then(response => {
        console.log(response)
        if(response.data.successful){
            callback(true);
            dispatch({ type: SET_USER, payload: response.data.user })
            dispatch({ type: IS_LOGGED_IN, payload: true })
        }else{
            callback(false)
        }
    })
}

export const getDailyFood = () => (dispatch) => {
    axios.get(`${ROOT_URL}/dailyFood`)
        .then(res => {
            dispatch({ type: GET_DAILY_FOOD, payload: res.data })
        })
        .catch(err => console.log(err))
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

export const addFood = (data) => (dispatch) => {
    const { 
    name,
    imageURL,
    description,
    foodTime,
    iron,
    magnesium,
    calcium,
    protein, userId } = data;
    axios.post(`${ROOT_URL}/addFood`, {
        name,
        imageURL,
        description,
        foodTime,
        iron,
        magnesium,
        calcium,
        protein,
        userId
    })
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