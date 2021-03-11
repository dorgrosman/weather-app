export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const toggleFaovrite = (id) => {
    return { type: TOGGLE_FAVORITE, productId: id }
}