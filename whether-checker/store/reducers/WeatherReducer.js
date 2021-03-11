import { SET_TEMP } from '../actions/WeatherActions';

const initialState = {
    temp: null
}

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TEMP:
            return { ...state , temp: action.payload }
        default:
            return state
    }
}

export default weatherReducer