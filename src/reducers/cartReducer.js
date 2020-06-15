
const initState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    showCart: false
};

function cartReducer(state = initState, action) {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            };

        case "SHOW_CART":
            return {
                ...state,
                showCart: action.payload
            };

        default:
            return state;

    }
};

export default cartReducer;