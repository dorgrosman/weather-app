import data from '../../../data'
import { TOGGLE_FAVORITE } from './../actions/ProductAction';

const initialState = {
    products: data.products,
    favoriteProducts: [],
    activationEvents: [],
}

const producteReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const updatedEvents = [...state.activationEvents]
            const selectedProduct = state.products.find(p => p.id == action.productId)
            const isExisted = state.favoriteProducts.includes(selectedProduct)

            if (isExisted) {
                const updatedFavProducts = state.favoriteProducts.filter(p => p.id != action.productId)
                updatedEvents.push({ product: selectedProduct, action: 'Unclicked favorite', timestamp: Date.now() })
                return { ...state, favoriteProducts: updatedFavProducts, activationEvents: updatedEvents }
            } else {
                updatedEvents.push({ product: selectedProduct, action: 'Clicked favorite', timestamp: Date.now() })
                return { ...state, favoriteProducts: state.favoriteProducts.concat(selectedProduct), activationEvents: updatedEvents }
            }
        default:
            return state
    }
}

export default producteReducer