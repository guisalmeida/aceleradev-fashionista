export function setProducts(data) {
    return {
            type: "SET_PRODUCTS",
            payload: data
        }
}

export function selectedProduct(data) {
    return {
            type: "SET_SELECTED_PRODUCT",
            payload: data
        }
}

export function addToCartAction(data) {
    return {
        type: "ADD_CART",
        payload: data
    }
}