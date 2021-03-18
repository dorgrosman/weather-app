export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, productId: id }
}

