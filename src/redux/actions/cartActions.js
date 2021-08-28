export function addToCartAction(data) {
    return {
        type: "ADD_CART",
        payload: data
    }
}

export function updateCartAction(data) {
    return {
        type: "UPDATE_CART",
        payload: data
    }
}

export function showCartAction(data) {
    return {
        type: "SHOW_CART",
        payload: data
    }
}