import data from '../../../data'
import { TOGGLE_FAVORITE } from './../actions/ProductAction';

const initialState = {
    products: data.products,
    favoriteProductes: [],
    events: [],
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteProductes.findIndex(
                product => product.id === action.productId)
            if (existingIndex >= 0) {
                const updateFavProducte = [...state.favoriteProductes]
                updateFavProducte.splice(existingIndex, 1)

                return { ...state, favoriteProductes: updateFavProducte }
                // return { ...state, events: [...events, {action: 'clicked fav', timestamp: Date.now()}], favoriteProductes: updateFavProducte }
            } else {
                const product = state.products.find(product => product.id === action.productId)
                return { ...state, favoriteProductes: state.favoriteProductes.concat(product) }
            }
        default:
            return state
    }

}

export default productReducer